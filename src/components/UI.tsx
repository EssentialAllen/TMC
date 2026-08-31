import Link from "next/link";
import Image from "next/image";

export const services = [
  {n:"01", t:"General Contracting", d:"End-to-end construction delivery with clear site leadership and accountable execution."},
  {n:"02", t:"Construction Management", d:"Professional oversight for cost, schedule, quality, trades, and communication."},
  {n:"03", t:"Project Management", d:"Organized planning, coordination, reporting, and support from start to finish."},
  {n:"04", t:"Preconstruction Support", d:"Early review of scope, budget, constructability, schedule, and site needs."},
  {n:"05", t:"Site Coordination", d:"Daily coordination of trades, deliveries, safety, access, and progress."},
  {n:"06", t:"Renovations & Upgrades", d:"Carefully planned improvements for existing and active spaces."},
];
export const advantages = [
  ["Right-Sized Team", "Professional enough for structured projects. Focused enough to stay responsive."],
  ["Direct Communication", "Clear answers, fewer layers, and better project visibility."],
  ["Hands-On Accountability", "Decision-makers stay close to the project from planning to closeout."],
  ["Cost-Aware Delivery", "Practical decisions that reduce waste and protect project budgets."],
  ["Flexible Coordination", "Able to adapt as site conditions, schedules, or client needs change."],
];
export function Eyebrow({children}:{children:React.ReactNode}) { return <p className="eyebrow">{children}</p> }
export function PageHero({eyebrow, title, children}:{eyebrow:string,title:string,children:React.ReactNode}) { return <section className="page-hero"><div className="shell narrow"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p className="lede">{children}</p></div></section> }
const photos:Record<string,string> = {
  "Modern Building Exterior":"https://images.pexels.com/photos/4889301/pexels-photo-4889301.jpeg?auto=compress&cs=tinysrgb&w=1800",
  "Active Facility Coordination":"https://images.pexels.com/photos/11299905/pexels-photo-11299905.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "Project Coordination and Planning":"https://images.pexels.com/photos/8961064/pexels-photo-8961064.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "Commercial Interior":"https://images.pexels.com/photos/22725910/pexels-photo-22725910.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "Facility Upgrade":"https://images.pexels.com/photos/7534179/pexels-photo-7534179.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "Community-Focused Space":"https://images.pexels.com/photos/19037688/pexels-photo-19037688.jpeg?auto=compress&cs=tinysrgb&w=1400",
};
export function Placeholder({label, className=""}:{label:string,className?:string}) { const src=photos[label]; return <figure className={`placeholder ${className}`}>{src&&<Image src={src} alt={label} fill sizes="(max-width: 900px) 100vw, 50vw" priority={label==="Modern Building Exterior"} unoptimized/>}<figcaption><span>{label}</span><small>Representative photography</small></figcaption></figure> }
export function Cta() { return <section className="cta"><div className="shell cta-inner"><div><Eyebrow>LET’S BUILD WITH CLARITY</Eyebrow><h2>Have a project in mind?</h2><p>Tell us what you are planning. We will review your inquiry and follow up to discuss scope, timing, and next steps.</p></div><Link href="/contact" className="button button-light">Start a Project Inquiry <span aria-hidden>↗</span></Link></div></section> }
