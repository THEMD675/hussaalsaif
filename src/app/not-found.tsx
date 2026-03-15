import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Return to Hussa AlSaif's official website — Saudi content creator and brand ambassador.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7fc] via-[#fafcfe] to-white -z-10" />

      <div className="text-center px-5 sm:px-8 max-w-lg mx-auto">
        {/* 404 number */}
        <p
          className="font-serif font-bold text-gradient leading-none mb-6"
          style={{ fontSize: "clamp(6rem, 20vw, 12rem)" }}
        >
          404
        </p>

        {/* Heading */}
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-[1.2]">
          This page doesn&apos;t exist
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-[15px] leading-[1.8] mb-10 max-w-md mx-auto">
          The page you&apos;re looking for may have been moved or no longer exists.
          Head back to explore Hussa&apos;s brand campaigns, audience insights, and media kit.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block"
          >
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="border border-[#89BBdf]/40 hover:border-[#89BBdf] text-[#89BBdf] px-8 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block"
          >
            Contact Hussa
          </Link>
        </div>

        {/* Subtle branding */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="font-serif text-lg font-bold text-gray-200">
            Hussa<span className="text-[#89BBdf]">.</span>
          </p>
        </div>
      </div>
    </main>
  );
}
