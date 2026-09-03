import Link from "next/link";
import Image from "next/image";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const source = inverse ? "tmc-projects-logo-white.svg" : "tmc-projects-logo.svg";
  return <Link href="/" aria-label="TMC Projects home" className={`logo ${inverse ? "logo-inverse" : ""}`}><Image src={`${basePath}/${source}`} alt="TMC Projects" width={300} height={154} priority={!inverse} unoptimized /></Link>;
}
