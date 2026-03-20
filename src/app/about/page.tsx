import type { Metadata } from "next";
import Link from "next/link";
import { buildMeta } from "@/lib/seo";
import { team } from "@/lib/data";

export const metadata: Metadata = buildMeta({
  title: "About Us",
  description: "Learn about Horizon Foundation — our mission, story, and the team working to build stronger communities.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-2">About Us</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Mission & Story</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          [PLACEHOLDER] This is a fictional non-profit. In a real site, this section would tell the organization&apos;s founding story and mission.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="rounded-2xl overflow-hidden">
          <div className="w-full h-80 bg-gradient-to-br from-emerald-700 via-teal-800 to-green-900 flex items-end p-8">
            <p className="text-emerald-200 text-sm">[Placeholder — organization photo would go here]</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Exist</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Horizon Foundation was founded on the belief that every community deserves access to education, clean water, nutritious food, and healthcare.
            </p>
            <p>
              We work alongside local leaders and partners to design programs that address root causes — not just symptoms — of inequality. Our approach is collaborative, data-driven, and community-led.
            </p>
            <p>
              Since our founding, we&apos;ve grown from a small volunteer group to an organization serving thousands of people across multiple programs.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="text-center mb-12">
        <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-2">Our Team</p>
        <h2 className="text-3xl font-bold text-gray-900">Leadership</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m) => (
          <div key={m.id} className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
            <div className={`h-36 bg-gradient-to-br ${m.gradient}`} />
            <div className="p-5">
              <h3 className="font-bold text-gray-900">{m.name}</h3>
              <p className="text-emerald-600 text-sm font-medium">{m.role}</p>
              <p className="text-gray-500 text-sm mt-2">{m.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/donate" className="inline-flex px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors">
          Support Our Mission
        </Link>
      </div>
    </div>
  );
}
