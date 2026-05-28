"use client";

import { useState } from "react";
 import { Link } from "next-view-transitions";
import { PDFDocument } from "pdf-lib";
import { motion } from "framer-motion";
import { ArrowLeft, Trash2 } from "lucide-react";

export default function DeletePagesPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pagesToDelete, setPagesToDelete] = useState("");

  const handleDelete = async () => {
    if (!file) {
      alert("Please choose a PDF.");
      return;
    }

    if (!pagesToDelete) {
      alert("Enter page numbers to delete.");
      return;
    }

    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);

    // Example input: 2,4,7
    const deleteIndexes = pagesToDelete
      .split(",")
      .map((num) => Number(num.trim()) - 1)
      .sort((a, b) => b - a);

    deleteIndexes.forEach((index) => {
      if (index >= 0 && index < pdf.getPageCount()) {
        pdf.removePage(index);
      }
    });

    const newPdfBytes = await pdf.save();

    const blob = new Blob([newPdfBytes], {
      type: "application/pdf",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "pages-deleted.pdf";
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
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="max-w-2xl mx-auto"
      >
        {/* Floating Icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
          }}
          className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-xl"
        >
          <Trash2
            size={34}
            className="text-white"
          />
        </motion.div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Delete PDF Pages
        </h1>

        <p className="text-center text-gray-500 mb-10 text-lg">
          Remove unwanted pages from your PDF.
        </p>

        {/* Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl">

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
            className="block w-full border-2 border-dashed border-purple-300 bg-purple-50 p-4 rounded-2xl mb-6"
          />

          <input
            type="text"
            placeholder="Pages to delete (example: 2,4,7)"
            value={pagesToDelete}
            onChange={(e) =>
              setPagesToDelete(e.target.value)
            }
            className="block w-full border border-gray-300 p-4 rounded-2xl mb-6 outline-none focus:border-purple-500"
          />

          <motion.button
            onClick={handleDelete}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold text-lg shadow-lg"
          >
            Delete Pages
          </motion.button>

        </div>
      </motion.div>
    </main>
  );
}