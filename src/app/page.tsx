import Image from "next/image";
import Link from "next/link";
import { Cta, Eyebrow } from "@/components/UI";
import { ServiceExplorer } from "@/components/ServiceExplorer";

const process = [["01", "Plan", "Scope · Budget · Schedule"], ["02", "Coordinate", "Consultants · Trades · Procurement"], ["03", "Build", "Site · Quality · Communication"], ["04", "Deliver", "Closeout · Handover · Support"]];

export default function Home() { return <>
  <section className="editorial-hero">
    <Image src="https://images.pexels.com/photos/4889301/pexels-photo-4889301.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="Contemporary commercial building exterior" fill priority sizes="100vw" unoptimized />
    <div className="hero-shade" />
    <div className="shell editorial-hero-copy"><Eyebrow>TMC PROJECTS / GENERAL CONTRACTING + PROJECT MANAGEMENT</Eyebrow><h1>Building Better.<br />Managing Smarter.</h1><p>The right-sized construction partner for projects that need clarity, coordination, and accountability.</p><div className="actions"><Link href="/contact" className="button button-light">Start a Project <span aria-hidden>→</span></Link><Link href="/projects" className="hero-link">View Our Work <span aria-hidden>↗</span></Link></div></div>
    <div className="hero-coordinate" aria-hidden>49.2827° N&nbsp;&nbsp; / &nbsp;&nbsp;123.1207° W</div>
  </section>

  <section className="section intro-statement"><div className="shell"><div className="section-marker">01 / ABOUT</div><h2>Construction works better<br />when everyone is aligned.</h2><p>TMC brings planning, coordination, and execution under one accountable team.</p><div className="pillar-row">{[["Plan", "Clear scope before construction."], ["Manage", "One point of accountability."], ["Build", "Execution down to the details."]].map((item, i) => <article key={item[0]}><span>0{i + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></div></section>

  <section className="selected-work"><div className="shell selected-heading"><div><div className="section-marker">02 / SELECTED WORK</div><h2>Built environments.<br />Carefully coordinated.</h2></div><Link href="/projects" className="text-link">View Our Work →</Link></div><div className="work-canvas">
    <article className="work-feature"><Image src="https://images.pexels.com/photos/22725910/pexels-photo-22725910.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Refined commercial interior" fill sizes="70vw" unoptimized /><div className="image-label"><small>PROJECT ENVIRONMENT / 01</small><strong>Commercial Interiors</strong><span>Renovation · Coordination · Finish Quality</span></div></article>
    <article className="work-detail"><Image src="https://images.pexels.com/photos/7534179/pexels-photo-7534179.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Professional facility upgrade" fill sizes="35vw" unoptimized /><div className="image-label"><small>PROJECT ENVIRONMENT / 02</small><strong>Facility Upgrades</strong><span>Phasing · Access · Minimal Disruption</span></div></article>
  </div><p className="shell photo-note">Photography is representative of the environments and scope TMC is positioned to support.</p></section>

  <section className="section services-editorial"><div className="shell"><div className="section-marker">03 / SERVICES</div><div className="services-title"><h2>What we do.</h2><p>Focused construction services, coordinated from early decisions through final turnover.</p></div><ServiceExplorer /></div></section>

  <section className="section process-editorial"><div className="shell"><div className="section-marker light">04 / PROCESS</div><div className="process-title"><h2>A clear process.<br />Better outcomes.</h2><p>Four connected stages. One accountable team.</p></div><div className="process-track">{process.map((item, index) => <article key={item[0]}><span>{item[0]}</span><div className="process-dot" aria-hidden /><h3>{item[1]}</h3><p>{item[2]}</p>{index < process.length - 1 && <i aria-hidden>→</i>}</article>)}</div></div></section>

  <section className="section tmc-equation"><div className="shell"><div className="section-marker">05 / WHY TMC</div><h2>Big-builder discipline.<br /><span>Small-team responsiveness.</span></h2><div className="equation-grid"><div><small>STRUCTURE</small>{["Planning", "Documentation", "Scheduling", "Cost awareness", "Site coordination"].map(x => <p key={x}>{x}</p>)}</div><strong aria-hidden>+</strong><div><small>RESPONSIVENESS</small>{["Direct communication", "Hands-on management", "Fast decisions", "Adaptability", "Accountability"].map(x => <p key={x}>{x}</p>)}</div><strong aria-hidden>=</strong><div className="equation-result"><small>THE TMC APPROACH</small><p>Professional structure.<br />Personal accountability.</p></div></div></div></section>
  <Cta />
</>; }
