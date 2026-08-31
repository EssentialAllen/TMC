import type { Metadata } from "next";
import Image from "next/image";
import { Cta, PageHero } from "@/components/UI";

export const metadata: Metadata = { title: "Project Experience" };

const projects = [
  { number: "01", title: "Commercial Interiors", subtitle: "Spaces shaped around people, operations, and detail.", image: "https://images.pexels.com/photos/22725910/pexels-photo-22725910.jpeg?auto=compress&cs=tinysrgb&w=1800", scope: "General Contracting · Project Management", priorities: ["Trade coordination", "Schedule control", "Finish quality"] },
  { number: "02", title: "Facility Upgrades", subtitle: "Improvement work planned around active environments.", image: "https://images.pexels.com/photos/7534179/pexels-photo-7534179.jpeg?auto=compress&cs=tinysrgb&w=1600", scope: "Phased Renovation · Site Coordination", priorities: ["Safe access", "Minimal disruption", "Clear communication"] },
  { number: "03", title: "Community-Focused Spaces", subtitle: "Practical, durable spaces designed to serve people well.", image: "https://images.pexels.com/photos/19037688/pexels-photo-19037688.jpeg?auto=compress&cs=tinysrgb&w=1600", scope: "Renovation · Construction Management", priorities: ["User experience", "Efficient delivery", "Responsible closeout"] },
];

export default function Projects() { return <>
  <PageHero eyebrow="02 / PROJECT EXPERIENCE" title="Work Defined by How It’s Delivered">Selected project environments that reflect TMC’s focus: clear planning, coordinated execution, and accountable delivery.</PageHero>
  <section className="section projects-editorial"><div className="shell project-editorial-list">{projects.map((project, index) => <article className={index % 2 ? "project-story reverse" : "project-story"} key={project.title}>
    <div className="project-story-image"><Image src={project.image} alt={`${project.title} representative environment`} fill sizes="(max-width: 900px) 100vw, 62vw" unoptimized /><span>PROJECT ENVIRONMENT / {project.number}</span></div>
    <div className="project-story-copy"><small>{project.number} / EXPERIENCE</small><h2>{project.title}</h2><p>{project.subtitle}</p><dl><div><dt>Scope</dt><dd>{project.scope}</dd></div><div><dt>Priorities</dt><dd>{project.priorities.join(" · ")}</dd></div></dl></div>
  </article>)}</div><p className="shell photo-note">Photography is representative and does not depict completed TMC projects. Project-specific metrics can be added as verified information becomes available.</p></section>
  <Cta />
</>; }
