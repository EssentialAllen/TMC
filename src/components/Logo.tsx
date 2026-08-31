import Link from "next/link";
import Image from "next/image";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" aria-label="TMC Projects home" className={`logo ${inverse ? "logo-inverse" : ""}`}><Image src="/tmc-projects-logo.png" alt="TMC Projects" width={340} height={175} priority={!inverse} /></Link>;
}
