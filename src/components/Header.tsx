"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Contact", "/contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="site-header"><div className="shell nav-wrap"><Logo /><button className="menu-button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(current => !current)}><span className="sr-only">Toggle navigation</span><span /><span /><span /></button><nav id="main-nav" aria-label="Main navigation" className={open ? "nav open" : "nav"}>{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href ? "active" : ""}>{label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="button button-small">Start a Project</Link></nav></div></header>;
}
