"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) { const body = await res.json().catch(() => null); throw new Error(body?.error ?? "Something went wrong"); }
      setStatus("success");
    } catch (err) { setErrorMsg(err instanceof Error ? err.message : "Unknown error"); setStatus("error"); }
  }

  if (status === "success") {
    return (
      <div className="max-w-xl mx-auto px-6 py-32 text-center">
        <div className="text-5xl mb-4">&#10003;</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank you!</h1>
        <p className="text-gray-600">We&apos;ve received your message and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">Contact Us</h1>
      <p className="text-gray-600 text-center mb-10">Have questions about our programs, events, or ways to get involved? We&apos;d love to hear from you.</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Field label="Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
        <div>
          <label htmlFor="subject" className="block text-sm text-gray-600 mb-1.5 font-medium">Subject</label>
          <select id="subject" name="subject" className="w-full rounded-lg bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:ring-0">
            <option value="general">General Inquiry</option>
            <option value="volunteer">Volunteering</option>
            <option value="partnership">Partnership</option>
            <option value="donation">Donation Question</option>
            <option value="media">Media / Press</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-gray-600 mb-1.5 font-medium">Message</label>
          <textarea id="message" name="message" rows={4} required className="w-full rounded-lg bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:ring-0 resize-y" />
        </div>
        {status === "error" && <p className="text-red-600 text-sm" role="alert">{errorMsg}</p>}
        <button type="submit" disabled={status === "submitting"} className="w-full py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors disabled:opacity-50">
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-gray-600 mb-1.5 font-medium">{label}</label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-lg bg-white border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:ring-0" />
    </div>
  );
}
