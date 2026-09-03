import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/UI";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { HeroVideo } from "@/components/HeroVideo";

const featured = [
  { number: "01", name: "The Nest", location: "Yellowknife, NT", value: "$8.5M", image: "/projects/the-nest-exterior.jpg", alt: "Exterior of The Nest residential conversion in Yellowknife" },
  { number: "02", name: "Base Building & Tenant Fit-Out", location: "Calgary, AB", value: "$2.45M", image: "/projects/avia-ng-base-building.jpg", alt: "Avia NG office and laboratory building" },
  { number: "03", name: "Headquarters Build Out", location: "Calgary, AB", value: "$4.9M", image: "/projects/gracon-headquarters.jpg", alt: "Gracon Holdings headquarters building" },
] as const;

export default function Home() { return <>
  <section className="editorial-hero">
    <HeroVideo />
    <div className="hero-shade" />
    <div className="shell editorial-hero-copy"><Eyebrow>GENERAL CONTRACTING + <span className="hero-discipline">PROJECT MANAGEMENT</span></Eyebrow><h1>Building Better.<br /><span className="hero-accent">Managing Smarter.</span></h1><p>The right-sized construction partner for projects that need clarity, coordination, and accountability.</p><div className="actions"><Link href="/contact" className="button button-light">Start a Project <span aria-hidden>→</span></Link><Link href="/projects" className="hero-link">View Our Work <span aria-hidden>→</span></Link></div></div>
  </section>

  <section className="section intro-statement"><div className="shell"><div className="section-marker">01 / POSITIONING</div><div className="statement-grid"><h2>Construction works better<br />when everyone is aligned.</h2><p>TMC brings planning, coordination, and execution under one accountable team.</p></div><div className="pillar-row">{[["Plan", "Clear scope before construction."], ["Manage", "One point of accountability."], ["Build", "Execution down to the details."]].map((item, i) => <article key={item[0]}><span>0{i + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></div></section>

  <section className="home-portfolio"><div className="shell selected-heading"><div><div className="section-marker light">02 / SELECTED WORK</div><h2>Experience you can see.</h2></div><Link href="/projects" className="text-link">View all work <span aria-hidden>→</span></Link></div><div className="shell home-project-grid">{featured.map((project, index) => <Link href="/projects" className={`home-project project-${index + 1}`} key={project.name}><div className="home-project-image"><Image src={project.image} alt={project.alt} fill sizes={index === 0 ? "(max-width: 700px) 100vw, 66vw" : "(max-width: 700px) 100vw, 34vw"} /><span>{project.number}</span></div><div className="home-project-meta"><div><small>{project.location}</small><h3>{project.name}</h3></div><strong>{project.value}</strong></div></Link>)}</div></section>

  <section className="section services-editorial"><div className="shell"><div className="section-marker">03 / SERVICES</div><div className="services-title"><h2>Integrated capabilities.</h2><p>Five core service areas drawn from proven experience across commercial, residential, industrial, and specialized facilities.</p></div><ServiceExplorer /><div className="services-all-link"><Link href="/services" className="text-link">Explore All Services →</Link></div></div></section>

  <section className="section process-home"><div className="shell"><div className="section-marker">04 / HOW WE WORK</div><div className="section-split"><h2>Clear from the first<br />decision to handover.</h2><p>Structure keeps projects moving. TMC brings the right people, information, and decisions together at each stage.</p></div><div className="process-line">{[["01","Plan","Scope · Budget · Schedule"],["02","Coordinate","Consultants · Trades · Procurement"],["03","Build","Site · Quality · Communication"],["04","Deliver","Closeout · Handover · Support"]].map((step) => <article key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div></div></section>

  <section className="why-home"><div className="shell"><div className="section-marker light">05 / WHY TMC</div><h2>Big-builder discipline.<br /><span>Small-team responsiveness.</span></h2><div className="equation-grid"><div><p className="equation-label">Structured delivery</p><ul><li>Planning</li><li>Documentation</li><li>Scheduling</li><li>Cost awareness</li><li>Site coordination</li></ul></div><b aria-hidden>+</b><div><p className="equation-label">Direct accountability</p><ul><li>Clear communication</li><li>Hands-on management</li><li>Practical decisions</li><li>Fast response</li></ul></div><b aria-hidden>=</b><div className="equation-result"><p className="equation-label">TMC Projects</p><p>A focused construction partner that stays close to the work.</p></div></div></div></section>

  <section className="home-contact"><div className="shell"><div className="section-marker">06 / START A PROJECT</div><div><h2>Have a project<br />to discuss?</h2><div><p>Tell us what you are planning. We’ll follow up with a clear next step.</p><Link href="/contact" className="button">Start a Project <span aria-hidden>→</span></Link></div></div></div></section>
</>; }
