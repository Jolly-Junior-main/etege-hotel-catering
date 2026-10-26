"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UtensilsCrossed, ArrowRight } from "lucide-react";

export default function RoomsRedirect() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/catering");
    }, 1500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 bg-ivory px-4">
      <div className="text-center p-8 sm:p-10 bg-white rounded-3xl shadow-card border border-beige max-w-lg mx-auto">
        <div className="w-14 h-14 rounded-2xl bg-burgundy/10 text-burgundy flex items-center justify-center mx-auto mb-5">
          <UtensilsCrossed className="w-7 h-7" />
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-3">
          Etege Catering & Events
        </h2>
        <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed mb-6">
          Room accommodation is no longer offered. Etege Hotel & Catering specializes exclusively in premier catering, grand wedding banquets, and hall celebrations.
        </p>
        <Link
          href="/catering"
          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-sm transition shadow-sm"
        >
          <span>Explore Catering Packages</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
