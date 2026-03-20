"use client";

import { useState } from "react";
import { donationTiers } from "@/lib/data";

export default function DonatePage() {
  const [selected, setSelected] = useState(50);
  const [custom, setCustom] = useState("");
  const isCustom = !donationTiers.some((t) => t.amount === selected);
  const displayAmount = isCustom ? (Number(custom) || 0) : selected;

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-2">Donate</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Make a Difference Today</h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Your donation directly funds our programs. Choose a giving level below to see the impact you can make.
        </p>
      </div>

      {/* Tier Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {donationTiers.map((t) => (
          <button
            key={t.amount}
            onClick={() => { setSelected(t.amount); setCustom(""); }}
            className={`rounded-xl border p-5 text-center transition-all ${
              selected === t.amount
                ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/20"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <p className="text-2xl font-bold text-gray-900">${t.amount}</p>
            <p className="text-xs text-emerald-600 font-semibold mt-1">{t.label}</p>
          </button>
        ))}
      </div>

      {/* Custom Amount */}
      <div className="mb-8">
        <label htmlFor="custom-amount" className="block text-sm text-gray-600 mb-1.5 font-medium">
          Or enter a custom amount
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
          <input
            id="custom-amount"
            type="number"
            min="1"
            value={custom}
            onChange={(e) => { setCustom(e.target.value); setSelected(-1); }}
            placeholder="Other amount"
            className="w-full rounded-lg bg-white border border-gray-300 pl-8 pr-4 py-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:ring-0"
          />
        </div>
      </div>

      {/* Impact message */}
      {displayAmount > 0 && (
        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-6 mb-8 text-center">
          <p className="text-emerald-700 font-medium">
            {donationTiers.find((t) => t.amount === selected)?.impact ??
              `Your $${displayAmount} donation will help fund our community programs.`}
          </p>
        </div>
      )}

      {/* Donate Button */}
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-4">
          [PLACEHOLDER] In a real site, this would connect to Stripe for secure payment processing.
        </p>
        <button
          disabled
          className="w-full md:w-auto px-10 py-4 rounded-lg bg-emerald-600 text-white font-bold text-lg opacity-50 cursor-not-allowed"
        >
          Donate ${displayAmount || "—"}
        </button>
        <p className="text-xs text-gray-400 mt-3">
          Donations are not processed on this demo site. No real transactions will occur.
        </p>
      </div>
    </div>
  );
}
