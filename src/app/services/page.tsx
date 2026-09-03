import type { Metadata } from "next";
import Image from "next/image";
import { Cta, PageHero } from "@/components/UI";

export const metadata: Metadata = { title: "Services" };

const services = [
  { number: "01", name: "New Build & Full Conversions", description: "Design-build of new commercial and residential buildings, and conversions of high-rises from commercial to residential.", image: "/projects/avia-ng-base-building.jpg" },
  { number: "02", name: "Mechanical", description: "Full plumbing and sheet metal work, including complete HVAC systems for commercial and industrial facilities.", image: "/projects/the-nest.jpg" },
  { number: "03", name: "Electrical", description: "Comprehensive commercial and industrial electrical installations, upgrades, and maintenance.", image: "https://images.pexels.com/photos/11288399/pexels-photo-11288399.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { number: "04", name: "Interior Systems", description: "Supply and installation of steel studs, drywall (mud, tape, sand), flooring, painting, T-bar ceilings, and pre-engineered panels or modular systems.", image: "https://images.pexels.com/photos/5511091/pexels-photo-5511091.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { number: "05", name: "Structural Steel", description: "CWB-certified fabrication in our 12,000 sq. ft. facility, with in-house ironworkers for onsite erection of structural steel components.", image: "/projects/emf-headquarters.jpg" },
] as const;

export default function Services() { return <>
  <PageHero eyebrow="03 / OUR SERVICES" title="Built to Deliver More In-House">Integrated construction capabilities help streamline coordination, strengthen quality control, and keep complex projects moving.</PageHero>
  <section className="pdf-services"><div className="shell">{services.map((service, index) => <article className={`pdf-service ${index % 2 ? "reverse" : ""}`} key={service.name}>
    <div className="pdf-service-image"><Image src={service.image} alt={`${service.name} capability`} fill sizes="(max-width: 900px) 100vw, 46vw" /></div>
    <div className="pdf-service-copy"><span>{service.number}</span><h2>{service.name}</h2><p>{service.description}</p></div>
  </article>)}</div></section>
  <Cta />
</>; }
