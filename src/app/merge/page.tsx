 "use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
 import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import { ArrowLeft, FilePlus2 } from "lucide-react";

export default function MergePage() {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleMerge = async () => {
    if (!files || files.length < 2) {
      alert("Please select at least 2 PDF files.");
      return;
    }

    const mergedPdf = await PDFDocument.create();

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const bytes = await file.arrayBuffer();

      const pdf = await PDFDocument.load(bytes);

      const pages = await mergedPdf.copyPages(
        pdf,
        pdf.getPageIndices()
      );

      pages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedBytes = await mergedPdf.save();

    const blob = new Blob([mergedBytes], {
      type: "application/pdf",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "merged.pdf";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 px-6 py-8">

       {/* Crazy Back Button */}
<Link href="/">
  <motion.button
    whileHover={{
      scale: 1.08,
      x: -6,
      boxShadow: "0 0 25px rgba(168,85,247,0.5)",
    }}
    whileTap={{
      scale: 0.95,
    }}
    className="group mb-12 relative overflow-hidden flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-purple-200 shadow-lg"
  >
    {/* Animated glowing background */}
    <motion.div
      animate={{
        x: ["-100%", "200%"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200/40 to-transparent"
    />

    {/* Icon */}
    <motion.div
      animate={{
        x: [0, -4, 0],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
      }}
      className="relative z-10"
    >
      <ArrowLeft
        size={20}
        className="text-purple-600"
      />
    </motion.div>

    {/* Text */}
    <span className="relative z-10 font-medium text-gray-700 group-hover:text-purple-600 transition">
      Back
    </span>
  </motion.button>
</Link>

      {/* Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
         transition={{
  duration: 0.35,
  ease: "easeOut",
}}
        className="max-w-2xl mx-auto"
      >

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
          }}
          className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-xl"
        >
          <FilePlus2 size={34} className="text-white" />
        </motion.div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Merge PDFs
        </h1>

        <p className="text-center text-gray-500 mb-10 text-lg">
          Combine multiple PDF files into one in seconds.
        </p>

        {/* Upload Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl">

          <input
            type="file"
            accept=".pdf"
            multiple
            onChange={(e) => setFiles(e.target.files)}
            className="block w-full border-2 border-dashed border-purple-300 bg-purple-50 p-8 rounded-2xl text-center mb-6"
          />

          <motion.button
            onClick={handleMerge}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg shadow-lg"
          >
            Merge PDFs
          </motion.button>

        </div>
      </motion.div>
    </main>
  );
}