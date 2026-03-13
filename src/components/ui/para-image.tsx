"use client";

import Image from "next/image";
import { ParaImage } from "@/data/module1/images";

interface ParaImageProps {
  image: ParaImage;
  visible: boolean;
}

export default function ParaImageCard({ image, visible }: ParaImageProps) {
  return (
    <div
      className={`transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={400}
          height={280}
          className="w-full rounded-lg object-cover"
        />
      ) : (
        <div className="w-full aspect-[4/3] rounded-lg border border-border-subtle bg-surface-elevated flex flex-col items-center justify-center p-4 text-center gap-3">
          <span className="text-3xl">{image.icon}</span>
          <p className="text-xs text-text-tertiary leading-relaxed max-w-[200px]">
            {image.placeholder}
          </p>
          <span className="text-[10px] text-text-tertiary/50 font-mono mt-1">
            swap with real photo
          </span>
        </div>
      )}
    </div>
  );
}
