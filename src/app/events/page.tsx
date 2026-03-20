import type { Metadata } from "next";
import Link from "next/link";
import { buildMeta } from "@/lib/seo";
import { events } from "@/lib/data";

export const metadata: Metadata = buildMeta({
  title: "Events",
  description: "Upcoming events at Horizon Foundation — galas, volunteer days, community programs, and charity runs.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-2">Events</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Upcoming Events</h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Join us at one of our upcoming events — volunteer, attend, or support from afar.
        </p>
      </div>

      <div className="space-y-6">
        {events.map((e) => (
          <div key={e.id} className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow md:flex">
            <div className={`md:w-64 h-40 md:h-auto bg-gradient-to-br ${e.gradient} shrink-0`} />
            <div className="p-6 md:p-8">
              <p className="text-xs text-emerald-600 font-semibold mb-1">{e.date}</p>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{e.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{e.location}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{e.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm mb-4">[PLACEHOLDER] Event dates and details are fictional for demo purposes.</p>
        <Link href="/contact" className="inline-flex px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
