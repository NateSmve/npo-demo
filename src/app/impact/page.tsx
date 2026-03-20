import type { Metadata } from "next";
import Link from "next/link";
import { buildMeta } from "@/lib/seo";
import { impactStats, programs } from "@/lib/data";

export const metadata: Metadata = buildMeta({
  title: "Our Impact",
  description: "See the measurable impact of Horizon Foundation — people served, programs running, and communities transformed.",
  path: "/impact",
});

export default function ImpactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-2">Impact</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Measuring What Matters</h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Transparency is at our core. Here&apos;s a look at the impact your support makes possible.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {impactStats.map((s) => (
          <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-6 text-center hover:shadow-md transition-shadow">
            <p className="text-3xl font-extrabold text-emerald-600">{s.value}</p>
            <p className="text-gray-900 font-medium text-sm mt-1">{s.label}</p>
            <p className="text-gray-500 text-xs mt-2">{s.description}</p>
          </div>
        ))}
      </div>

      {/* Programs Detail */}
      <div className="text-center mb-12">
        <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-2">Programs</p>
        <h2 className="text-3xl font-bold text-gray-900">Where Your Donations Go</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {programs.map((p) => (
          <div key={p.title} className="rounded-xl border border-gray-200 bg-white p-8 hover:shadow-md transition-shadow">
            <span className="text-4xl mb-4 block">{p.icon}</span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center p-10 rounded-2xl bg-emerald-50 border border-emerald-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Help us do more</h2>
        <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
          Your contribution directly funds these programs and expands our reach to new communities.
        </p>
        <Link href="/donate" className="inline-flex px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors">
          Donate Today
        </Link>
      </div>
    </div>
  );
}
