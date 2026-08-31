import type {Metadata} from "next";
import {Suspense} from "react";
import {LeadForm} from "@/components/LeadForm";
import {Eyebrow} from "@/components/UI";
export const metadata:Metadata={title:"Contact"};
export default function Contact(){return <><section className="contact-hero"><div className="shell"><Eyebrow>CONTACT TMC PROJECTS</Eyebrow><h1>Let’s Talk About Your Project</h1><p>Share a few details and we’ll follow up to discuss the right next step.</p></div></section><section className="contact-section"><div className="shell contact-grid simple-contact"><aside><Eyebrow>START A CONVERSATION</Eyebrow><h2>Clear answers.<br/>Direct communication.</h2><p>You do not need every detail figured out. Tell us what you are planning, where the project is located, and what support you need.</p><a href="mailto:info@tmcprojects.ca">info@tmcprojects.ca</a><p className="contact-note">General contracting and project management for commercial, institutional, and community-focused spaces.</p></aside><div className="form-panel"><Suspense fallback={<p>Loading inquiry form…</p>}><LeadForm/></Suspense></div></div></section></>}
