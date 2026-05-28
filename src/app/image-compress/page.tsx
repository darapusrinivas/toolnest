 "use client";

import { useState } from "react";
 import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import { ArrowLeft, ImageDown } from "lucide-react";

export default function ImageCompressPage() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(0.7);

  const handleCompress = () => {
    if (!file) {
      alert("Please choose an image.");
      return;
    }

    const img = new window.Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.src = reader.result as string;
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx?.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (!blob) return;

          const url = URL.createObjectURL(blob);

          const a = document.createElement("a");
          a.href = url;
          a.download = "compressed-image.jpg";
          a.click();

          URL.revokeObjectURL(url);
        },
        "image/jpeg",
        quality
      );
    };

    reader.readAsDataURL(file);
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
        transition={{ duration: 0.4 }}
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
          <ImageDown size={34} className="text-white" />
        </motion.div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Compress Image
        </h1>

        <p className="text-center text-gray-500 mb-10 text-lg">
          Reduce your image size while keeping good quality.
        </p>

        {/* Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl">

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
            className="block w-full border-2 border-dashed border-purple-300 bg-purple-50 p-4 rounded-2xl mb-6"
          />

          {/* Quality Slider */}
          <div className="mb-6 text-left">
            <label className="block mb-3 font-medium text-gray-700">
              Quality: {Math.round(quality * 100)}%
            </label>

            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={quality}
              onChange={(e) =>
                setQuality(Number(e.target.value))
              }
              className="w-full accent-purple-600"
            />
          </div>

          <motion.button
            onClick={handleCompress}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg shadow-lg"
          >
            Compress Image
          </motion.button>

        </div>
      </motion.div>
    </main>
  );
}