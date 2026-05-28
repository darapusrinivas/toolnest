 "use client";

import { useState } from "react";
 import { Link } from "next-view-transitions";
import { PDFDocument } from "pdf-lib";
import { motion } from "framer-motion";
import { ArrowLeft, Scissors } from "lucide-react";

export default function SplitPage() {
  const [file, setFile] = useState<File | null>(null);
  const [range1, setRange1] = useState("");
  const [range2, setRange2] = useState("");

  const handleSplit = async () => {
    if (!file) {
      alert("Please choose a PDF.");
      return;
    }

    if (!range1) {
      alert("Enter at least first page range.");
      return;
    }

    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);

    const getPages = (range: string) => {
      const [start, end] = range.split("-").map(Number);

      return Array.from(
        { length: end - start + 1 },
        (_, i) => start - 1 + i
      );
    };

    // PART 1
    const pagesForPdf1 = getPages(range1);

    const pdf1 = await PDFDocument.create();
    const copied1 = await pdf1.copyPages(
      pdf,
      pagesForPdf1
    );

    copied1.forEach((page) =>
      pdf1.addPage(page)
    );

    const bytes1 = await pdf1.save();

    const blob1 = new Blob([bytes1], {
      type: "application/pdf",
    });

    const url1 = URL.createObjectURL(blob1);

    const a1 = document.createElement("a");
    a1.href = url1;
    a1.download = "part1.pdf";
    a1.click();

    URL.revokeObjectURL(url1);

    // PART 2 (optional)
    if (range2) {
      const pagesForPdf2 = getPages(range2);

      const pdf2 = await PDFDocument.create();

      const copied2 = await pdf2.copyPages(
        pdf,
        pagesForPdf2
      );

      copied2.forEach((page) =>
        pdf2.addPage(page)
      );

      const bytes2 = await pdf2.save();

      const blob2 = new Blob([bytes2], {
        type: "application/pdf",
      });

      const url2 = URL.createObjectURL(blob2);

      const a2 = document.createElement("a");
      a2.href = url2;
      a2.download = "part2.pdf";
      a2.click();

      URL.revokeObjectURL(url2);
    }
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
          whileTap={{ scale: 0.95 }}
          className="group mb-12 relative overflow-hidden flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-purple-200 shadow-lg"
        >
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200/40 to-transparent"
          />

          <motion.div
            animate={{ x: [0, -4, 0] }}
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

          <span className="relative z-10 font-medium text-gray-700 group-hover:text-purple-600 transition">
            Back
          </span>
        </motion.button>
      </Link>

      {/* Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-xl"
        >
          <Scissors size={34} className="text-white" />
        </motion.div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Split PDF
        </h1>

        <p className="text-center text-gray-500 mb-10 text-lg">
          Split your PDF into separate parts easily.
        </p>

        {/* Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl">

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
            className="block w-full border-2 border-dashed border-purple-300 bg-purple-50 p-4 rounded-2xl mb-5"
          />

          <input
            type="text"
            placeholder="Part 1 pages (example: 1-3)"
            value={range1}
            onChange={(e) =>
              setRange1(e.target.value)
            }
            className="block w-full border border-gray-300 p-4 rounded-2xl mb-4"
          />

          <input
            type="text"
            placeholder="Part 2 pages (optional: 4-8)"
            value={range2}
            onChange={(e) =>
              setRange2(e.target.value)
            }
            className="block w-full border border-gray-300 p-4 rounded-2xl mb-6"
          />

          <motion.button
            onClick={handleSplit}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg shadow-lg"
          >
            Split PDF
          </motion.button>

        </div>
      </motion.div>
    </main>
  );
}