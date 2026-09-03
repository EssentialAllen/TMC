"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Contact", "/contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="site-header"><div className="shell nav-wrap"><Logo /><button className="menu-button" aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(current => !current)}><span /><span /><span /></button><nav id="main-nav" aria-label="Main navigation" className={open ? "nav open" : "nav"}>{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? "page" : undefined} className={pathname === href ? "active" : ""}>{label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="button button-small">Start a Project <span aria-hidden>→</span></Link></nav></div></header>;
}
