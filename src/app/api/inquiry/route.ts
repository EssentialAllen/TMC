import {NextResponse} from "next/server";
const email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request:Request){try{const body=await request.json();if(body.website)return NextResponse.json({ok:true});if(!body.name||!body.email||!body.message||!email.test(body.email))return NextResponse.json({error:"Please complete all required fields."},{status:400});
  // CRM/EMAIL INTEGRATION POINT: send the validated lead to Resend, SendGrid,
  // HubSpot, Airtable, Supabase, or your preferred secure webhook using server env vars.
  const lead={...body,receivedAt:new Date().toISOString()}; console.info("TMC inquiry received",{...lead,message:"[redacted in log]"}); return NextResponse.json({ok:true});}catch{return NextResponse.json({error:"Unable to process inquiry."},{status:500})}}
