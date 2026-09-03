"use client";
import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

export function LeadForm() {
  const params=useSearchParams();
  const [state,setState]=useState<"idle"|"opened">("idle");
  const [source]=useState(()=>params.get("source")||"");
  const [campaign]=useState(()=>params.get("campaign")||"");
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const form=e.currentTarget;const data=new FormData(form);const name=String(data.get("name")||"");const email=String(data.get("email")||"");const phone=String(data.get("phone")||"");const message=String(data.get("message")||"");const source=String(data.get("lead_source")||"");const campaign=String(data.get("lead_campaign")||"");const body=[`Name: ${name}`,`Email: ${email}`,`Phone: ${phone||"Not provided"}`,source&&`Lead source: ${source}`,campaign&&`Campaign: ${campaign}`,"",message].filter(Boolean).join("\n");window.location.href=`mailto:info@tmcprojects.ca?subject=${encodeURIComponent(`Project inquiry from ${name}`)}&body=${encodeURIComponent(body)}`;setState("opened")}
  if(state==="opened")return <div className="form-success" role="status"><span aria-hidden>✓</span><h2>Your email app is ready.</h2><p>Review the prepared message and send it to complete your inquiry.</p><button className="text-button" onClick={()=>setState("idle")}>Return to the form</button></div>;
  return <form className="lead-form simple-form" onSubmit={submit}>
    <input type="hidden" name="lead_source" value={source}/><input type="hidden" name="lead_campaign" value={campaign}/>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <div className="form-grid"><Field label="Name" name="name" required/><Field label="Email" name="email" type="email" required/><Field label="Phone" name="phone" type="tel"/><label className="full">Message <textarea name="message" rows={7} required placeholder="Tell us about your project, location, timing, or what you need help with."/></label></div>
    <div className="form-footer"><p>Required fields are marked with an asterisk (*).</p><button className="button" type="submit">Prepare Email<span aria-hidden>→</span></button></div>
  </form>
}
function Field({label,name,type="text",required=false}:{label:string,name:string,type?:string,required?:boolean}){return <label>{label}{required&&" *"}<input name={name} type={type} required={required}/></label>}
