"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Shield, Lock, Mail, ArrowRight, Hotel } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@etegehotel.com");
  const [password, setPassword] = useState("••••••••");
  const [role, setRole] = useState("owner");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      router.push("/admin");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        
        <div className="text-center space-y-2">
          <div className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center p-1 mx-auto shadow-md border-2 border-gold/60 ring-2 ring-gold/20 overflow-hidden">
            <Image
              src="/images/logo-circle.png"
              alt="Etege Emblem"
              width={60}
              height={60}
              className="object-contain w-full h-full rounded-full"
            />
          </div>
          <h1 className="font-serif text-2xl font-bold text-white tracking-wide">
            Staff & Management Portal
          </h1>
          <p className="text-xs text-slate-400">
            Etege Hotel & Catering • Addis Ababa Operations
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-400 font-medium mb-1">
              Select Staff Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-gold"
            >
              <option value="owner">General Manager (Full Access)</option>
              <option value="hotel_staff">Hotel Reservation Staff</option>
              <option value="catering_manager">Catering & Banquet Coordinator</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-400 font-medium mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-400 font-medium mb-1">
              Security Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-gold"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full py-3.5 px-4 rounded-xl bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-xs tracking-wider uppercase transition shadow-md flex items-center justify-center space-x-2"
          >
            {isLoggingIn ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Access Management Console</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-slate-800">
          <Link href="/" className="text-xs text-slate-400 hover:text-gold transition">
            ← Return to Public Website
          </Link>
        </div>

      </div>
    </div>
  );
}
