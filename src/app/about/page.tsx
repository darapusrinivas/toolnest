 "use client";

import { Link } from "next-view-transitions";
import {
  Shield,
  Zap,
  Globe,
  FileCheck,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50 text-gray-900">

      {/* Navbar */}
      <nav className="flex items-center gap-6 px-8 py-5 backdrop-blur-xl bg-white/70 border-b border-white/30 sticky top-0 z-50">

        <Link
          href="/"
          className="px-5 py-2 rounded-xl bg-purple-600 text-white hover:scale-105 transition"
        >
          ← Back to 
        </Link>

      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-14">

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-100 text-purple-700 font-semibold mb-8">
          <Shield size={20} />
          About ToolNest
        </div>

        <h1 className="text-6xl font-black leading-tight">
          About
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            {" "}ToolNest
          </span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-9">
          ToolNest is a modern platform that provides
          fast, secure, and easy-to-use PDF tools
          for students, professionals, and businesses.
        </p>

      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-20">

        {/* Card 1 */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[32px] p-8 shadow-lg hover:scale-[1.02] transition">

          <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
            <Zap
              className="text-purple-600"
              size={30}
            />
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Fast Tools
          </h3>

          <p className="text-gray-600 leading-8">
            ToolNest provides fast and reliable
            PDF tools that work instantly inside
            your browser.
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[32px] p-8 shadow-lg hover:scale-[1.02] transition">

          <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-6">
            <Shield
              className="text-pink-500"
              size={30}
            />
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Secure Platform
          </h3>

          <p className="text-gray-600 leading-8">
            Your documents stay protected with
            secure browser-based file processing
            and privacy-focused tools.
          </p>

        </div>

        {/* Card 3 */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[32px] p-8 shadow-lg hover:scale-[1.02] transition">

          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
            <Globe
              className="text-blue-500"
              size={30}
            />
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Accessible Anywhere
          </h3>

          <p className="text-gray-600 leading-8">
            ToolNest works across desktop,
            tablet, and mobile devices without
            any software installation.
          </p>

        </div>

      </section>

      {/* Detailed About */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[40px] p-10 shadow-xl">

          <h2 className="text-4xl font-black mb-8">
            About ToolNest
          </h2>

          <div className="space-y-8 text-gray-600 leading-9 text-lg">

            {/* Section */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Who We Are
              </h3>

              <p>
                ToolNest is a professional online
                platform designed to simplify PDF
                management through fast, secure,
                and reliable digital tools.
              </p>

            </div>

            {/* Section */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Our Mission
              </h3>

              <p>
                Our mission is to provide
                high-quality PDF solutions that
                are simple, accessible, and
                optimized for productivity.
              </p>

            </div>

            {/* Section */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Our Services
              </h3>

              <ul className="space-y-2 list-disc list-inside">

                <li>Compress PDF Files</li>

                <li>Merge Multiple PDFs</li>

                <li>Split PDF Documents</li>

                <li>Convert PDF to Word and JPG</li>

                <li>Convert Images and Word to PDF</li>

                <li>Fast and Secure File Processing</li>

              </ul>

            </div>

            {/* Section */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Why Choose ToolNest
              </h3>

              <ul className="space-y-2 list-disc list-inside">

                <li>Professional and user-friendly interface</li>

                <li>Secure document handling</li>

                <li>Fast cloud-based processing</li>

                <li>No software installation required</li>

                <li>Works on all devices</li>

              </ul>

            </div>

            {/* Section */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Our Commitment
              </h3>

              <p>
                We are committed to delivering
                dependable PDF tools that improve
                workflow efficiency and simplify
                document management for everyone.
              </p>

            </div>

            {/* Creator */}
            <div className="pt-4 border-t border-gray-200">

              <div className="flex items-center gap-3">

                <FileCheck className="text-purple-600" />

                <p className="font-semibold text-gray-900">
                  Built with ❤️ by Srinivas
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}