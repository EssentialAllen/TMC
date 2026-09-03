import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/UI";
import { ServiceExplorer } from "@/components/ServiceExplorer";

const featured = [
  { number: "01", name: "The Nest", location: "Yellowknife, NT", value: "$8.5M", image: "/projects/the-nest.jpg", alt: "Mechanical systems at The Nest" },
  { number: "02", name: "Base Building & Tenant Fit-Out", location: "Calgary, AB", value: "$2.45M", image: "/projects/avia-ng-base-building.jpg", alt: "Avia NG office and laboratory building" },
  { number: "03", name: "EMF Headquarters Build Out", location: "Calgary, AB", value: "$4.9M", image: "/projects/emf-headquarters.jpg", alt: "EMF headquarters commercial building" },
] as const;

export default function Home() { return <>
  <section className="editorial-hero">
    <Image src="/projects/avia-ng-base-building.jpg" alt="Completed commercial building reflecting TMC project experience" fill priority sizes="100vw" />
    <div className="hero-shade" />
    <div className="shell editorial-hero-copy"><Eyebrow>TMC PROJECTS / GENERAL CONTRACTING + PROJECT MANAGEMENT</Eyebrow><h1>Building Better.<br />Managing Smarter.</h1><p>The right-sized construction partner for projects that need clarity, coordination, and accountability.</p><div className="actions"><Link href="/contact" className="button button-light">Start a Project <span aria-hidden>→</span></Link><Link href="/projects" className="hero-link">View Our Work <span aria-hidden>↗</span></Link></div></div>
  </section>

  <section className="section intro-statement"><div className="shell"><div className="section-marker">01 / ABOUT</div><h2>Construction works better<br />when everyone is aligned.</h2><p>TMC brings planning, coordination, and execution under one accountable team.</p><div className="pillar-row">{[["Plan", "Clear scope before construction."], ["Manage", "One point of accountability."], ["Build", "Execution down to the details."]].map((item, i) => <article key={item[0]}><span>0{i + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></div></section>

  <section className="home-portfolio"><div className="shell selected-heading"><div><div className="section-marker light">02 / PROJECTS</div><h2>Proven experience.<br />Complex environments.</h2></div><Link href="/projects" className="text-link">View Project Portfolio →</Link></div><div className="shell home-project-grid">{featured.map(project => <Link href="/projects" className="home-project" key={project.name}><div className="home-project-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 33vw" /><span>{project.number}</span></div><div className="home-project-meta"><div><small>{project.location}</small><h3>{project.name}</h3></div><strong>{project.value}</strong></div></Link>)}</div><p className="shell legacy-note">Featured legacy work delivered under EMF Contracting, a company previously owned and led by TMC’s owner.</p></section>

  <section className="section services-editorial"><div className="shell"><div className="section-marker">03 / SERVICES</div><div className="services-title"><h2>Integrated capabilities.</h2><p>Five core service areas drawn from proven experience across commercial, residential, industrial, and specialized facilities.</p></div><ServiceExplorer /><div className="services-all-link"><Link href="/services" className="text-link">Explore All Services →</Link></div></div></section>
</>; }
