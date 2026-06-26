"use client"
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Privacy from "@/components/Privacy";
import Hero from "@/components/Hero"
import ReferralBanner from "@/components/ReferralBanner";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B1225]">
      <ReferralBanner />
      <Hero />
      <Features />
      <Privacy />
      <Pricing />
    </main>
  );
}