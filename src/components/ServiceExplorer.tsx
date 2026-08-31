"use client";

import Image from "next/image";
import { useState } from "react";

const serviceItems = [
  { number: "01", title: "General Contracting", description: "Full construction execution from site preparation through final turnover.", capabilities: ["Trade coordination", "Scheduling", "Site supervision", "Quality control", "Closeout"], image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { number: "02", title: "Project Management", description: "One accountable team aligning scope, decisions, schedule, and communication.", capabilities: ["Scope coordination", "Schedule tracking", "Consultant alignment", "Decision tracking", "Reporting"], image: "https://images.pexels.com/photos/8961064/pexels-photo-8961064.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { number: "03", title: "Preconstruction", description: "Early clarity on constructability, budget, risk, and the path to site.", capabilities: ["Scope review", "Budget review", "Site conditions", "Risk identification", "Planning support"], image: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { number: "04", title: "Construction Coordination", description: "Practical day-to-day control of trades, access, deliveries, and progress.", capabilities: ["Trade sequencing", "Site access", "Deliveries", "Safety coordination", "Progress updates"], image: "https://images.pexels.com/photos/11299905/pexels-photo-11299905.jpeg?auto=compress&cs=tinysrgb&w=1600" },
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
