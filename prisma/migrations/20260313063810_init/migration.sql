-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('student', 'admin');

-- CreateEnum
CREATE TYPE "EnrollmentStatus" AS ENUM ('active', 'expired', 'suspended');

-- CreateEnum
CREATE TYPE "PhotoIdStatus" AS ENUM ('pending', 'approved', 'rejected');

-- CreateEnum
CREATE TYPE "CertStatus" AS ENUM ('valid', 'expired', 'revoked');

-- CreateEnum
CREATE TYPE "DiscountType" AS ENUM ('percent', 'fixed');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'student',
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "emailVerifyToken" TEXT,
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enrollment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "stripeSessionId" TEXT,
    "stripeCustomerId" TEXT,
    "amountPaid" INTEGER NOT NULL,
    "couponId" TEXT,
    "status" "EnrollmentStatus" NOT NULL DEFAULT 'active',
    "enrolledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleProgress" (
    "id" TEXT NOT NULL,
    "enrollmentId" TEXT NOT NULL,
    "moduleId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(3),
    "unlockedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ModuleProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizAttempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "moduleProgressId" TEXT NOT NULL,
    "moduleId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "totalQuestions" INTEGER NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "questionIds" INTEGER[],
    "answers" JSONB NOT NULL,
    "attemptedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuizAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamAttempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "attemptNumber" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "totalQuestions" INTEGER NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "moduleBreakdown" JSONB NOT NULL,
    "questionIds" INTEGER[],
    "answers" JSONB NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "submittedAt" TIMESTAMP(3),
    "timedOut" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ExamAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhotoId" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "PhotoIdStatus" NOT NULL DEFAULT 'pending',
    "reviewedAt" TIMESTAMP(3),
    "reviewedBy" TEXT,

    CONSTRAINT "PhotoId_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "certNumber" TEXT NOT NULL,
    "holderName" TEXT NOT NULL,
    "courseVersion" TEXT NOT NULL,
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "examAttemptId" TEXT NOT NULL,
    "pdfPath" TEXT,
    "status" "CertStatus" NOT NULL DEFAULT 'valid',
    "revokedAt" TIMESTAMP(3),
    "revokedReason" TEXT,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "discountType" "DiscountType" NOT NULL,
    "discountValue" INTEGER NOT NULL,
    "maxUses" INTEGER,
    "usedCount" INTEGER NOT NULL DEFAULT 0,
    "validFrom" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validUntil" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SequenceCounter" (
    "id" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "current" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SequenceCounter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_emailVerifyToken_key" ON "User"("emailVerifyToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_resetToken_key" ON "User"("resetToken");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_userId_key" ON "Enrollment"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_stripeSessionId_key" ON "Enrollment"("stripeSessionId");

-- CreateIndex
CREATE INDEX "Enrollment_userId_idx" ON "Enrollment"("userId");

-- CreateIndex
CREATE INDEX "Enrollment_stripeSessionId_idx" ON "Enrollment"("stripeSessionId");

-- CreateIndex
CREATE INDEX "ModuleProgress_enrollmentId_idx" ON "ModuleProgress"("enrollmentId");

-- CreateIndex
CREATE UNIQUE INDEX "ModuleProgress_enrollmentId_moduleId_key" ON "ModuleProgress"("enrollmentId", "moduleId");

-- CreateIndex
CREATE INDEX "QuizAttempt_userId_idx" ON "QuizAttempt"("userId");

-- CreateIndex
CREATE INDEX "QuizAttempt_moduleProgressId_idx" ON "QuizAttempt"("moduleProgressId");

-- CreateIndex
CREATE INDEX "ExamAttempt_userId_idx" ON "ExamAttempt"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PhotoId_userId_key" ON "PhotoId"("userId");

-- CreateIndex
CREATE INDEX "PhotoId_userId_idx" ON "PhotoId"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_certNumber_key" ON "Certificate"("certNumber");

-- CreateIndex
CREATE INDEX "Certificate_userId_idx" ON "Certificate"("userId");

-- CreateIndex
CREATE INDEX "Certificate_certNumber_idx" ON "Certificate"("certNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_code_key" ON "Coupon"("code");

-- CreateIndex
CREATE INDEX "Coupon_code_idx" ON "Coupon"("code");

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleProgress" ADD CONSTRAINT "ModuleProgress_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "Enrollment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizAttempt" ADD CONSTRAINT "QuizAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizAttempt" ADD CONSTRAINT "QuizAttempt_moduleProgressId_fkey" FOREIGN KEY ("moduleProgressId") REFERENCES "ModuleProgress"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAttempt" ADD CONSTRAINT "ExamAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotoId" ADD CONSTRAINT "PhotoId_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
