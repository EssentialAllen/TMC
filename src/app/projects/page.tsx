import type { Metadata } from "next";
import Image from "next/image";
import { Cta, Eyebrow } from "@/components/UI";

export const metadata: Metadata = {
  title: "Project Portfolio",
  description: "Selected legacy project experience associated with TMC leadership across major conversions, commercial fit-outs, and specialized clinics.",
};

const featured = [
  {
    number: "01",
    name: "The Nest",
    client: "Borealis Development",
    location: "Yellowknife, NT",
    value: "$8.5M",
    image: "/projects/the-nest.jpg",
    alt: "Mechanical systems at The Nest in Yellowknife",
    scope: "EMF successfully completed the full mechanical and electrical scope for a commercial-to-residential conversion project. Our team managed the transition of building systems to meet residential standards, including upgrades to HVAC, plumbing, power distribution, and lighting. The result was a seamless transformation that delivered efficient, reliable systems tailored for a highrise and residential living.",
  },
  {
    number: "02",
    name: "Base Building & Tenant Fit-Out",
    client: "Avia NG Airport Consultants",
    location: "Calgary, AB",
    value: "$2.45M",
    image: "/projects/avia-ng-base-building.jpg",
    alt: "Avia NG offices and laboratory building in Calgary",
    scope: "EMF acted as General Contractor for the construction of 8,000 sq. ft. of new offices and laboratory space for Avia NG. The project included full interior fit-out, with the integration of DIRTT paneling systems to deliver a modern, flexible, and efficient work environment.",
  },
  {
    number: "03",
    name: "EMF Headquarters Build Out",
    client: "EMF Contracting & Gracon Holdings",
    location: "Calgary, AB",
    value: "$4.9M",
    image: "/projects/emf-headquarters.jpg",
    alt: "EMF headquarters commercial building in Calgary",
    scope: "EMF acted as General Contractor for a new 18,000 sq. ft. commercial building. EMF purchased a 2.5 acres lots back in 2019 and design-built his head office. The whole building was completed in 10 months.",
  },
] as const;

const groups = [
  {
    title: "Commercial Fit-Outs",
    projects: [
      { client: "First Aid Training Calgary", location: "Calgary, AB", value: "$285K", image: "https://images.pexels.com/photos/37277086/pexels-photo-37277086/free-photo-of-cpr-training-session-in-classroom-setting.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "CPR training equipment in a real classroom setting", scope: "Build out of classrooms, training spaces, and offices, with careful attention to layout and finishes to support both learning and day-to-day operations." },
      { client: "EMF", location: "Calgary, AB", value: "$610K", image: "https://static.wixstatic.com/media/b432b1_0df4253687164f22841edbe99172367d~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85/b432b1_0df4253687164f22841edbe99172367d~mv2.jpg", alt: "EMF Contracting organization photograph", scope: "Design-build of our own office with a focus on clean, modern aesthetics and functionality." },
      { client: "Calgary Board of Education", location: "Calgary, AB", value: "$1.4M", image: "https://images.pexels.com/photos/19037688/pexels-photo-19037688.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Real modern classroom interior with desks and chairs", scope: "Full renovation of a classroom at Sir John Franklin. We upgraded the layout, finishes, and building systems to create a brighter, more functional learning environment." },
      { client: "Little Hands Montessori Academy", location: "Calgary area, AB", value: "$270K", image: "https://images.pexels.com/photos/8923952/pexels-photo-8923952.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Close-up of educational toys arranged on classroom shelves", scope: "Fit-out of a daycare facility, creating safe, functional, and engaging spaces for children." },
      { client: "Calgary Board of Education", location: "Calgary, AB", value: "$735K", image: "https://images.pexels.com/photos/5905441/pexels-photo-5905441.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Close-up of a classroom desk, stationery, and whiteboard", scope: "Redevelopment of multiple classrooms, consisting of all trades, and also included selective building envelope upgrades." },
      { client: "BEHR", location: "Calgary, AB", value: "$865K", image: "https://images.pexels.com/photos/5511091/pexels-photo-5511091.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Real modern office meeting room with blue chairs", scope: "Full renovation of the BEHR main office. Work included upgrades to mechanical and electrical systems, layout reconfiguration, and high-quality finishes to create a professional and contemporary office environment." },
    ],
  },
  {
    title: "Clinics",
    projects: [
      { client: "CurisRx", location: "Calgary, AB", value: "$310K", image: "https://images.pexels.com/photos/6129587/pexels-photo-6129587.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Close-up of organized sterile medical supplies", scope: "Build-out of a 2,500 sq. ft. pharmacy, including a fully equipped sterilization room for lab operations, and meeting strict ISO 7 standards." },
      { client: "Create Pharmacy", location: "Toronto, ON", value: "$890K", image: "https://images.pexels.com/photos/11288399/pexels-photo-11288399.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Close-up of stainless-steel laboratory equipment", scope: "5,500 sq. ft. compounding facility in Toronto, featuring three large clean rooms with highly intricate ductwork and specialized engineering." },
      { client: "Create Pharmacy", location: "Calgary, AB", value: "$1.1M", image: "https://images.pexels.com/photos/5682887/pexels-photo-5682887.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Close-up of a pharmacist preparing a formulation", scope: "8,000 sq. ft. compounding pharmacy in Calgary, featuring two front offices across two floors, four clean rooms, a laboratory, and two delivery bays." },
      { client: "20/20 Pharmacy", location: "Calgary, AB", value: "$360K", image: "https://images.pexels.com/photos/14797855/pexels-photo-14797855.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Pharmacist organizing products on real pharmacy shelves", scope: "Renovation of an existing compounding pharmacy and storefront within an occupied professional building. The project required careful planning to maintain operations and tenant access while upgrading the facility to modern standards." },
      { client: "Aspen Springs Pharmacy", location: "Calgary, AB", value: "$735K", image: "https://images.pexels.com/photos/26834971/pexels-photo-26834971.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Real professional consultation room with modern finishes", scope: "4,000 sq. ft. medical clinic featuring a pharmacy storefront, two medical exam rooms, and two testing rooms." },
    ],
  },
] as const;

export default function Projects() { return <>
  <section className="portfolio-hero"><div className="shell"><Eyebrow>02 / PROJECT PORTFOLIO</Eyebrow><h1>Experience built<br />across complex projects.</h1><div className="portfolio-intro"><p>Selected legacy work delivered under EMF Contracting, a company previously owned and led by TMC’s owner.</p><p>This portfolio demonstrates experience in general contracting, conversions, mechanical systems, commercial fit-outs, and specialized facilities.</p></div></div></section>

  <section className="featured-portfolio"><div className="shell"><div className="section-marker">FEATURED / TROPHY PROJECTS</div>{featured.map((project, index) => <article className={`featured-project ${index % 2 ? "reverse" : ""}`} key={project.name}>
    <div className="featured-project-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 900px) 100vw, 62vw" priority={index === 0} /><span>{project.number} / FEATURED</span></div>
    <div className="featured-project-copy"><p className="project-kicker">{project.location}</p><h2>{project.name}</h2><p className="project-client">for {project.client}</p><p className="project-scope">{project.scope}</p><dl><div><dt>Project value</dt><dd>{project.value}</dd></div><div><dt>Location</dt><dd>{project.location}</dd></div></dl></div>
  </article>)}</div></section>

  <section className="project-archive"><div className="shell"><div className="section-marker light">PROJECT ARCHIVE / 11 PROJECTS</div>{groups.map((group, groupIndex) => <section className="archive-group" key={group.title}><header><span>0{groupIndex + 1}</span><h2>{group.title}</h2><p>{group.projects.length} projects</p></header><div className="archive-grid">{group.projects.map((project, index) => <article className="archive-card archive-card-photo" key={`${project.client}-${index}`}><div className="archive-thumb"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><div className="archive-card-body"><div className="archive-card-top"><span>{String(index + 1).padStart(2, "0")}</span><strong>{project.value}</strong></div><h3>{project.client}</h3><p>{project.scope}</p><div className="archive-card-foot">{project.location}</div></div></article>)}</div></section>)}</div></section>
  <Cta />
</>; }
