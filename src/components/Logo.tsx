import { SVGS } from "@/assets";
import { Image } from "./Image";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: ClassValue;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Image
      className={cn("max-w-[137px] w-full h-auto object-contain", className)}
      src={SVGS.logo}
    />
  );
}
