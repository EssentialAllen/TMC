import Link from "next/link";
import Image from "next/image";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return <Link href="/" aria-label="TMC Projects home" className={`logo ${inverse ? "logo-inverse" : ""}`}><Image src={`${basePath}/tmc-projects-logo.png`} alt="TMC Projects" width={340} height={175} priority={!inverse} unoptimized /></Link>;
}
