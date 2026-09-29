"use client";



import { PenLine } from "lucide-react";

import { type FormEvent, type ReactNode, useState } from "react";

import { whatsappInquiryUrl } from "@/data/contact";

import { ContactSelect } from "./ContactSelect";

import { Magnetic } from "./Magnetic";



const projectTypes = [

  "Web application",

  "Mobile app (iOS / Android)",

  "Web + mobile",

  "Automation / AI agent",

  "Redesign or rebuild",

  "Not sure yet",

];



const budgetRanges = [

  "Under $2,000",

  "$2,000 – $5,000",

  "$5,000 – $10,000",

  "$10,000 – $25,000",

  "$25,000+",

  "Prefer to discuss",

];



const timelines = [

  "ASAP (4–6 weeks)",

  "1–3 months",

  "3–6 months",

  "Flexible / exploring",

];



function FieldLabel({ children, optional }: { children: ReactNode; optional?: boolean }) {

  return (

    <span className="mb-2 block text-[13px] text-ink/55">

      {children}

      {optional ? <span className="text-ink/35"> (optional)</span> : null}

    </span>

  );

}



function fieldValue(formData: FormData, name: string) {

  const value = formData.get(name);

  if (typeof value !== "string") return "";

  return value.trim();

}



function buildInquiryMessage(formData: FormData) {

  const optional = (label: string, value: string) => (value ? `${label}: ${value}` : null);



  const lines = [

    "New project inquiry",

    "",

    `Name: ${fieldValue(formData, "name")}`,

    `Email: ${fieldValue(formData, "email")}`,

    optional("Phone / WhatsApp", fieldValue(formData, "phone")),

    optional("Company", fieldValue(formData, "company")),

    `Project type: ${fieldValue(formData, "projectType")}`,

    optional("Budget", fieldValue(formData, "budget")),

    optional("Timeline", fieldValue(formData, "timeline")),

    optional("Existing URL", fieldValue(formData, "existingUrl")),

    "",

    "Summary:",

    fieldValue(formData, "summary"),

    optional("References", fieldValue(formData, "references")),

  ].filter((line): line is string => line !== null && line !== "");



  return lines.join("\n");

}



export function ContactForm() {

  const [sent, setSent] = useState(false);

  const [projectType, setProjectType] = useState("");

  const [budget, setBudget] = useState("");

  const [timeline, setTimeline] = useState("");



  function handleSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    const url = whatsappInquiryUrl(buildInquiryMessage(formData));

    window.open(url, "_blank", "noopener,noreferrer");

    setSent(true);

    form.reset();

    setProjectType("");

    setBudget("");

    setTimeline("");

  }



  return (

    <div className="reveal w-full" style={{ transitionDelay: "120ms" }}>

      <form

        className="contact-form-card rounded-[28px] bg-paper p-6 text-ink shadow-[0_24px_60px_-32px_rgba(0,0,0,0.55)] sm:p-8 md:rounded-[32px] md:p-10"

        onSubmit={handleSubmit}

      >

        <p className="mb-2 max-w-2xl text-[15px] font-medium leading-snug text-ink/90 sm:text-base">

          Tell me about your project — the more context you share, the faster I can reply with a clear plan and quote.

        </p>

        <p className="mb-8 text-[13px] text-ink/45">Fields marked * are required. Submit opens WhatsApp with your answers.</p>



        {sent ? (

          <p role="status" className="mb-6 rounded-2xl border border-ink/10 bg-ink/[0.04] px-4 py-3 text-sm text-ink/80">

            Opening WhatsApp — if it didn&apos;t open, check your popup blocker and try again.

          </p>

        ) : null}



        <div className="space-y-7">

          <div className="grid gap-7 sm:grid-cols-2">

            <label className="block">

              <FieldLabel>Your Name*</FieldLabel>

              <input type="text" name="name" required autoComplete="name" className="contact-field-underline" />

            </label>

            <label className="block">

              <FieldLabel>Email*</FieldLabel>

              <input type="email" name="email" required autoComplete="email" className="contact-field-underline" />

            </label>

          </div>



          <div className="grid gap-7 sm:grid-cols-2">

            <label className="block">

              <FieldLabel optional>WhatsApp / phone</FieldLabel>

              <input type="tel" name="phone" autoComplete="tel" inputMode="tel" className="contact-field-underline" />

            </label>

            <label className="block">

              <FieldLabel optional>Company or brand</FieldLabel>

              <input type="text" name="company" autoComplete="organization" className="contact-field-underline" />

            </label>

          </div>



          <div className="grid gap-7 sm:grid-cols-2">

            <div className="block">

              <FieldLabel>Project type*</FieldLabel>

              <ContactSelect

                name="projectType"

                value={projectType}

                onChange={setProjectType}

                required

                placeholder="Select one"

                headerLabel="Select one"

                options={projectTypes.map((label) => ({ value: label, label }))}

              />

            </div>

            <div className="block">

              <FieldLabel optional>Budget range</FieldLabel>

              <ContactSelect

                name="budget"

                value={budget}

                onChange={setBudget}

                placeholder="Select if you have one in mind"

                headerLabel="Select one"

                options={budgetRanges.map((label) => ({ value: label, label }))}

              />

            </div>

          </div>



          <div className="grid gap-7 sm:grid-cols-2">

            <div className="block">

              <FieldLabel optional>Target timeline</FieldLabel>

              <ContactSelect

                name="timeline"

                value={timeline}

                onChange={setTimeline}

                placeholder="Select if known"

                headerLabel="Select one"

                options={timelines.map((label) => ({ value: label, label }))}

              />

            </div>

            <label className="block">

              <FieldLabel optional>Existing site or product URL</FieldLabel>

              <input type="url" name="existingUrl" inputMode="url" placeholder="https://" className="contact-field-underline" />

            </label>

          </div>



          <label className="block">

            <FieldLabel>Project summary*</FieldLabel>

            <textarea

              name="summary"

              required

              rows={4}

              placeholder="Goals, users, must-have features, integrations, and anything already decided."

              className="contact-field-underline contact-textarea min-h-[6.5rem] resize-y"

            />

          </label>



          <label className="block">

            <FieldLabel optional>References or inspiration</FieldLabel>

            <textarea

              name="references"

              rows={2}

              placeholder="Links to apps you like, competitors, or Figma/docs."

              className="contact-field-underline contact-textarea min-h-[4.5rem] resize-y"

            />

          </label>

        </div>



        <Magnetic

          type="submit"

          className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-[15px] font-medium text-paper transition-transform duration-300"

        >

          Send on WhatsApp

          <PenLine size={17} strokeWidth={2} aria-hidden />

        </Magnetic>

      </form>

    </div>

  );

}


