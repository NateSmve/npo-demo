import Link from "next/link";
import { impactStats, programs, events } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-4">Horizon Foundation</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 max-w-3xl">
            Building stronger communities, one program at a time
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mb-10">
            We empower underserved communities through education, clean water, health services, and environmental stewardship.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/donate" className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors">
              Make a Donation
            </Link>
            <Link href="/impact" className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-colors">
              See Our Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-emerald-600">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-extrabold text-white">{s.value}</p>
                <p className="text-emerald-100 text-sm mt-1">{s.label}</p>
                <p className="text-emerald-200/70 text-xs mt-1">[PLACEHOLDER]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-2">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Programs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <span className="text-3xl mb-3 block">{p.icon}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-2">Get Involved</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</h2>
            </div>
            <Link href="/events" className="hidden md:inline-flex text-sm text-emerald-600 hover:text-emerald-500 font-medium transition-colors">
              View all &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {events.slice(0, 2).map((e) => (
              <div key={e.id} className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className={`h-32 bg-gradient-to-br ${e.gradient}`} />
                <div className="p-6">
                  <p className="text-xs text-emerald-600 font-semibold mb-1">{e.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{e.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{e.location}</p>
                  <p className="text-gray-600 text-sm">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-2xl bg-emerald-600 p-10 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Your support makes a difference</h2>
          <p className="text-emerald-100 max-w-md mx-auto mb-8">
            Every donation helps us expand our programs and reach more communities in need.
          </p>
          <Link href="/donate" className="inline-flex px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors">
            Donate Now
          </Link>
        </div>
      </section>
    </>
  );
}
