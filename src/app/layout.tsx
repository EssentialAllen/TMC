import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = { metadataBase: new URL("https://tmcprojects.ca"), title: {default:"TMC Projects | General Contracting & Project Management",template:"%s | TMC Projects"}, description:"TMC Projects provides general contracting and project management services for commercial, institutional, and community-focused projects with clarity, coordination, and accountability.", openGraph:{title:"TMC Projects | Building Better. Managing Smarter.",description:"The right-sized builder for projects that need clarity, coordination, and accountability.",type:"website"}, robots:{index:true,follow:true} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html> }
