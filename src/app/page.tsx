"use client";

import { useState } from "react";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";

import {
  FilePlus2,
  Scissors,
  ImageDown,
  Image,
  FileImage,
  Trash2,
  FileText,
  Minimize2,
  FileStack,
  Search,
  Shield,
  Zap,
  ArrowRight,
  Star,
} from "lucide-react";

const tools = [
  {
    name: "Merge PDF",
    icon: FilePlus2,
    link: "/merge",
    desc: "Combine multiple PDFs into one",
    color: "from-orange-400 to-orange-500",
  },
  {
    name: "Split PDF",
    icon: Scissors,
    link: "/split",
    desc: "Split PDF into custom ranges",
    color: "from-red-400 to-pink-500",
  },
  {
    name: "Compress Image",
    icon: ImageDown,
    link: "/image-compress",
    desc: "Reduce image size instantly",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "PDF to Image",
    icon: Image,
    link: "/pdf-to-image",
    desc: "Convert PDF pages to images",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Image to PDF",
    icon: FileImage,
    link: "/image-to-pdf",
    desc: "Turn images into one PDF",
    color: "from-purple-400 to-violet-500",
  },
  {
    name: "Delete Pages",
    icon: Trash2,
    link: "/delete-pages",
    desc: "Remove selected PDF pages",
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "Word to PDF",
    icon: FileText,
    link: "/word-to-pdf",
    desc: "Convert Word into PDF",
    color: "from-indigo-400 to-blue-500",
  },
  {
    name: "PDF to Word",
    icon: FileText,
    link: "/pdf-to-word",
    desc: "Convert PDF into Word",
    color: "from-sky-400 to-cyan-500",
  },
  {
    name: "Compress PDF",
    icon: Minimize2,
    link: "/compress-pdf",
    desc: "Reduce PDF file size",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Extract Pages",
    icon: FileStack,
    link: "/extract-pages",
    desc: "Extract specific pages",
    color: "from-teal-400 to-green-500",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#f5edff,_white,_#eef4ff)] relative">

      {/* Glow Backgrounds */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-300/30 blur-3xl rounded-full" />

      <div className="absolute top-[200px] right-[-150px] w-[400px] h-[400px] bg-pink-300/30 blur-3xl rounded-full" />

      <div className="absolute bottom-[-200px] left-[30%] w-[500px] h-[500px] bg-blue-300/20 blur-3xl rounded-full" />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="hidden md:flex absolute left-20 top-72 w-28 h-28 rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl items-center justify-center rotate-[-15deg]"
      >
        <FileText
          size={48}
          className="text-purple-500"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="hidden md:flex absolute right-20 top-80 w-28 h-28 rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl items-center justify-center rotate-[15deg]"
      >
        <Image
          size={48}
          className="text-pink-500"
        />
      </motion.div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 px-3 sm:px-6 pt-4 sm:pt-5">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 px-5 sm:px-8 py-5 rounded-[30px] bg-white/60 backdrop-blur-2xl border border-white/40 shadow-xl">

          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-3xl sm:text-4xl font-black"
          >
            <span className="text-gray-900">
              Tool
            </span>

            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Nest
            </span>
          </motion.h1>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 md:gap-10 text-gray-800 font-semibold text-sm sm:text-base">

            <a
              href="#home"
              className="hover:text-purple-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Home
            </a>

            <a
              href="#tools"
              className="hover:text-purple-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Tools
            </a>

            <Link
              href="/about"
              className="hover:text-purple-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="hover:text-purple-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Contact
            </Link>
          </div>

          {/* Bookmark */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 30px rgba(168,85,247,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              alert(
                "Press Ctrl + D to bookmark ToolNest!"
              )
            }
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-xl text-sm sm:text-base"
          >
            <Star size={18} />
            Bookmark Us
          </motion.button>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative text-center pt-16 sm:pt-24 pb-20 px-4 sm:px-6"
      >

        {/* Top Badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg text-purple-600 font-medium"
        >
          <Zap size={18} />
          Fast • Free • Secure • Easy to Use
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-10 text-4xl sm:text-6xl md:text-8xl font-black leading-tight tracking-tight text-gray-900"
        >
          All the PDF tools
          <br />
          you need,
          <br />

          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            all in one place
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="text-gray-600 text-lg sm:text-2xl mt-8 max-w-3xl mx-auto leading-8 sm:leading-10 px-2"
        >
          ToolNest offers free and easy-to-use
          PDF tools.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-14 max-w-3xl mx-auto flex items-center px-4 sm:px-6 py-4 sm:py-5 rounded-[30px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-2xl"
        >
          <Search
            size={28}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="flex-1 bg-transparent outline-none text-base sm:text-xl px-5"
          />
        </motion.div>

        {/* Features */}
        <div className="flex justify-center gap-8 sm:gap-14 mt-16 flex-wrap">

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
              <Shield className="text-green-500" />
            </div>

            <div className="text-left">
              <h4 className="font-bold text-xl">
                100% Free
              </h4>

              <p className="text-gray-500">
                Forever free to use
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
              <Zap className="text-purple-500" />
            </div>

            <div className="text-left">
              <h4 className="font-bold text-xl">
                Easy to Use
              </h4>

              <p className="text-gray-500">
                Simple and fast
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Shield className="text-blue-500" />
            </div>

            <div className="text-left">
              <h4 className="font-bold text-xl">
                Secure
              </h4>

              <p className="text-gray-500">
                Your files are safe
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="relative px-4 sm:px-6 pb-24"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">

            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 flex items-center gap-3">
              <span className="text-purple-500">
                ✨
              </span>
              Popular Tools
            </h3>

            <button className="text-purple-600 font-semibold text-lg hover:translate-x-1 transition">
              View all tools →
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {filteredTools.map((tool) => {
              const Icon = tool.icon;

              return (
                <motion.div
                  key={tool.name}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Link href={tool.link}>
                    <div className="group relative overflow-hidden h-full p-7 rounded-[30px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-2xl transition duration-300">

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-purple-100/20 to-pink-100/20" />

                      <div
                        className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon
                          size={30}
                          className="text-white"
                        />
                      </div>

                      <h4 className="relative z-10 mt-6 text-2xl font-bold text-gray-900">
                        {tool.name}
                      </h4>

                      <p className="relative z-10 mt-3 text-gray-500 leading-7 min-h-[84px]">
  {tool.desc}
</p>

                      <div className="relative z-10 mt-8 flex justify-end">
                        <ArrowRight className="text-purple-500 group-hover:translate-x-2 transition duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 pb-10">

         <div className="max-w-7xl mx-auto mb-10 p-8 rounded-[32px] bg-gradient-to-r from-purple-100/60 to-pink-100/40 backdrop-blur-2xl border border-white/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">

  {/* Left Side */}
  <div className="flex items-center gap-6">

    {/* Shield Icon */}
    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
      <Shield
        size={42}
        className="text-white"
      />
    </div>

    {/* Text */}
    <div>
      <h3 className="text-3xl font-bold text-gray-900">
        Your Privacy is Our Priority
      </h3>

      <p className="text-gray-600 mt-2 text-lg leading-8">
        All files are processed in your
        browser. We never upload or store
        your files on our servers.
      </p>
    </div>
  </div>

  {/* Right Side Button */}
  <Link
    href="/privacy-policy"
    className="px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-xl hover:scale-105 transition"
  >
    Learn More →
  </Link>

</div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-200 pt-14 relative z-10">

          {/* Logo */}
          <div>
            <h1 className="text-4xl font-black">
              <span className="text-gray-900">
                Tool
              </span>

              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Nest
              </span>
            </h1>

            <p className="text-gray-500 mt-5 leading-8 text-lg">
              All-in-one free online PDF tools
              for everyone. Easy, fast and secure.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Tools
            </h4>

            <div className="flex flex-col gap-4 text-gray-500">

              <Link
                href="/merge"
                className="hover:text-purple-600 transition"
              >
                Merge PDF
              </Link>

              <Link
                href="/split"
                className="hover:text-purple-600 transition"
              >
                Split PDF
              </Link>

              <Link
                href="/compress-pdf"
                className="hover:text-purple-600 transition"
              >
                Compress PDF
              </Link>

              <button
                onClick={() => {
                  document
                    .getElementById("tools")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="text-purple-600 font-semibold hover:translate-x-1 transition text-left"
              >
                View All Tools →
              </button>

            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Company
            </h4>

            <div className="flex flex-col gap-4 text-gray-500">

              <Link
                href="/about"
                className="hover:text-purple-600 transition w-fit"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="hover:text-purple-600 transition w-fit"
              >
                Contact
              </Link>

              <Link
                href="/privacy-policy"
                className="hover:text-purple-600 transition text-left w-fit"
              >
                Privacy Policy
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 mt-14 border-t border-gray-200 pt-8">
          © 2026 ToolNest. All rights reserved.
        </div>

      </footer>
    </main>
  );
}