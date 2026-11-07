import Image from "next/image";
import logoImage from '@/public/images/scaleBos-logo.png'

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`${className}`}>
      <Image src={logoImage} alt="scaleBos logo" />
    </span>
  );
}
