import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import bcrypt from "bcryptjs";

async function main() {
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adapter = new PrismaPg(pool as any);
  const prisma = new PrismaClient({ adapter });

  // Seed admin user
  const adminEmail = "jeff@zone.net.au";
  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });

  if (!existing) {
    const passwordHash = await bcrypt.hash("changeme123", 10);
    await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        fullName: "Jeff (Admin)",
        role: "admin",
        emailVerified: true,
      },
    });
    console.log(`✓ Admin user created: ${adminEmail} (password: changeme123)`);
  } else {
    console.log(`Admin user already exists: ${adminEmail}`);
  }

  // Seed certificate sequence counter
  const counter = await prisma.sequenceCounter.findUnique({
    where: { id: "certificate" },
  });
  if (!counter) {
    await prisma.sequenceCounter.create({
      data: { id: "certificate", prefix: "LSO", current: 0 },
    });
    console.log("✓ Certificate sequence counter created");
  }

  await prisma.$disconnect();
  await pool.end();
}

main().catch(console.error);
