"use client";

import Image from "next/image";
import { useState } from "react";

const serviceItems = [
  { number: "01", title: "New Build & Full Conversions", description: "Design-build of new commercial and residential buildings, and conversions of high-rises from commercial to residential.", capabilities: ["Commercial buildings", "Residential buildings", "Design-build", "High-rise conversions", "Full conversions"], image: "/projects/avia-ng-base-building.jpg" },
  { number: "02", title: "Mechanical", description: "Full plumbing and sheet metal work, including complete HVAC systems for commercial and industrial facilities.", capabilities: ["Plumbing", "Sheet metal", "HVAC systems", "Commercial facilities", "Industrial facilities"], image: "/projects/the-nest.jpg" },
  { number: "03", title: "Electrical", description: "Comprehensive commercial and industrial electrical installations, upgrades, and maintenance.", capabilities: ["Installations", "Upgrades", "Maintenance", "Commercial systems", "Industrial systems"], image: "https://images.pexels.com/photos/11288399/pexels-photo-11288399.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { number: "04", title: "Interior Systems", description: "Supply and installation of steel studs, drywall (mud, tape, sand), flooring, painting, T-bar ceilings, and pre-engineered panels or modular systems.", capabilities: ["Steel studs", "Drywall", "Flooring & painting", "T-bar ceilings", "Modular systems"], image: "https://images.pexels.com/photos/5511091/pexels-photo-5511091.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { number: "05", title: "Structural Steel", description: "CWB-certified fabrication in our 12,000 sq. ft. facility, with in-house ironworkers for onsite erection of structural steel components.", capabilities: ["CWB-certified", "Fabrication", "12,000 sq. ft. facility", "In-house ironworkers", "Onsite erection"], image: "/projects/emf-headquarters.jpg" },
] as const;

export function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const selected = serviceItems[active];
  return <div className="service-explorer">
    <div className="service-tabs" role="tablist" aria-label="TMC services">
      {serviceItems.map((item, index) => <button key={item.number} role="tab" aria-selected={active === index} aria-controls="service-panel" onClick={() => setActive(index)} onMouseEnter={() => setActive(index)}><span>{item.number}</span>{item.title}<i aria-hidden>→</i></button>)}
    </div>
    <div className="service-panel" id="service-panel" role="tabpanel">
      <div className="service-panel-image"><Image key={selected.image} src={selected.image} alt="Construction team coordinating work on site" fill sizes="(max-width: 900px) 100vw, 50vw" unoptimized /></div>
      <div className="service-panel-copy"><p>{selected.description}</p><ul>{selected.capabilities.map(capability => <li key={capability}>{capability}</li>)}</ul></div>
    </div>
  </div>;
}
