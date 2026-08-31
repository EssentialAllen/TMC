"use client";
import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

export function LeadForm() {
  const params=useSearchParams();
  const [state,setState]=useState<"idle"|"sending"|"success"|"error">("idle");
  const [source]=useState(()=>params.get("source")||"");
  const [campaign]=useState(()=>params.get("campaign")||"");
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setState("sending");const form=e.currentTarget;const data=Object.fromEntries(new FormData(form));try{const res=await fetch("/api/inquiry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});if(!res.ok)throw new Error();setState("success");form.reset();}catch{setState("error")}}
  if(state==="success")return <div className="form-success" role="status"><span aria-hidden>✓</span><h2>Thank you.</h2><p>Your inquiry has been received. TMC Projects will follow up shortly.</p><button className="text-button" onClick={()=>setState("idle")}>Send another inquiry</button></div>;
  return <form className="lead-form simple-form" onSubmit={submit}>
    <input type="hidden" name="lead_source" value={source}/><input type="hidden" name="lead_campaign" value={campaign}/>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <div className="form-grid"><Field label="Name" name="name" required/><Field label="Email" name="email" type="email" required/><Field label="Phone" name="phone" type="tel"/><label className="full">Message <textarea name="message" rows={7} required placeholder="Tell us about your project, location, timing, or what you need help with."/></label></div>
    <div className="form-footer"><p>Required fields are marked with an asterisk (*).</p><button disabled={state==="sending"} className="button" type="submit">{state==="sending"?"Sending…":"Send Inquiry"}<span aria-hidden>↗</span></button></div>
    {state==="error"&&<p className="form-error" role="alert">Something went wrong. Please try again or contact us directly at info@tmcprojects.ca.</p>}
  </form>
}
function Field({label,name,type="text",required=false}:{label:string,name:string,type?:string,required?:boolean}){return <label>{label}{required&&" *"}<input name={name} type={type} required={required}/></label>}
