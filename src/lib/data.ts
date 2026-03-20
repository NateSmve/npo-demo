export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  gradient: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  gradient: string;
}

export const impactStats = [
  { value: "12,500+", label: "People Served", description: "[PLACEHOLDER] Total individuals impacted by our programs since founding." },
  { value: "45", label: "Community Partners", description: "[PLACEHOLDER] Organizations we collaborate with to deliver programs." },
  { value: "8", label: "Active Programs", description: "[PLACEHOLDER] Ongoing initiatives across education, health, and environment." },
  { value: "$2.1M", label: "Funds Raised", description: "[PLACEHOLDER] Total donations received to support our mission." },
];

export const programs = [
  { title: "Youth Education", icon: "📚", description: "After-school tutoring and mentorship programs for underserved communities." },
  { title: "Clean Water Initiative", icon: "💧", description: "Providing access to safe drinking water in rural communities." },
  { title: "Community Gardens", icon: "🌱", description: "Urban farming projects that provide fresh food and build community." },
  { title: "Health Screenings", icon: "❤️", description: "Free health screenings and wellness workshops for low-income families." },
];

export const team: TeamMember[] = [
  { id: "1", name: "Maria Santos", role: "Executive Director", bio: "[PLACEHOLDER] Founding director with 15+ years in nonprofit leadership and community development.", gradient: "from-emerald-700 via-teal-800 to-green-900" },
  { id: "2", name: "David Park", role: "Director of Programs", bio: "[PLACEHOLDER] Oversees all program operations. Background in public health and education policy.", gradient: "from-blue-700 via-indigo-800 to-violet-900" },
  { id: "3", name: "Amira Hassan", role: "Development Director", bio: "[PLACEHOLDER] Leads fundraising and donor relations. Previously at a major national foundation.", gradient: "from-amber-700 via-orange-800 to-red-900" },
  { id: "4", name: "James Whitfield", role: "Community Outreach", bio: "[PLACEHOLDER] Connects programs with local partners and volunteers. Lifelong community organizer.", gradient: "from-rose-700 via-pink-800 to-fuchsia-900" },
];

export const events: Event[] = [
  { id: "1", title: "Annual Gala & Fundraiser", date: "April 15, 2026", location: "Grand Ballroom, Downtown", description: "Our signature fundraising event featuring dinner, live auction, and keynote speaker.", gradient: "from-amber-700 via-orange-800 to-red-900" },
  { id: "2", title: "Community Garden Day", date: "May 3, 2026", location: "Riverside Park", description: "Volunteer day to plant and maintain our community garden. All ages welcome.", gradient: "from-emerald-700 via-green-800 to-teal-900" },
  { id: "3", title: "Summer Reading Program Kickoff", date: "June 1, 2026", location: "Main Library, 200 Oak St", description: "Launch of our summer youth reading program with book giveaways and activities.", gradient: "from-blue-700 via-sky-800 to-cyan-900" },
  { id: "4", title: "5K Run for Clean Water", date: "September 20, 2026", location: "Lakefront Trail", description: "Annual charity run to raise funds for our clean water initiative.", gradient: "from-cyan-700 via-teal-800 to-emerald-900" },
];

export const donationTiers = [
  { amount: 25, label: "Supporter", impact: "Provides school supplies for one student for a semester" },
  { amount: 50, label: "Champion", impact: "Funds one month of after-school tutoring for a child" },
  { amount: 100, label: "Builder", impact: "Sponsors a community garden plot for one growing season" },
  { amount: 250, label: "Visionary", impact: "Provides clean water access for a family for one year" },
];
