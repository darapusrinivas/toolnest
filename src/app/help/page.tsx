import { Link } from "next-view-transitions";
import {
  LifeBuoy,
  FileQuestion,
  ShieldCheck,
  Mail,
} from "lucide-react";

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50 text-gray-900">

      {/* Navbar */}
      <nav className="flex items-center gap-6 px-8 py-5 backdrop-blur-xl bg-white/70 border-b border-white/30 sticky top-0 z-50">

        <Link
          href="/"
          className="px-5 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          ← Back to Home
        </Link>

      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16">

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-100 text-purple-700 font-semibold mb-8">
          <LifeBuoy size={20} />
          ToolNest Support
        </div>

        <h1 className="text-6xl font-black leading-tight">
          Help
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            {" "}Center
          </span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-9">
          Need help using ToolNest?
          Find answers, guides, and support information here.
        </p>

      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-20">

        {/* Card 1 */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition">

          <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
            <FileQuestion
              className="text-purple-600"
              size={30}
            />
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Common Questions
          </h3>

          <p className="text-gray-600 leading-8">
            Learn how to merge, split,
            compress, and convert files easily.
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition">

          <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-6">
            <ShieldCheck
              className="text-pink-500"
              size={30}
            />
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Safe & Secure
          </h3>

          <p className="text-gray-600 leading-8">
            Your files are processed securely
            in your browser without uploads.
          </p>

        </div>

        {/* Card 3 */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition">

          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
            <Mail
              className="text-blue-500"
              size={30}
            />
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Contact Support
          </h3>

          <p className="text-gray-600 leading-8">
            Reach out anytime if you face issues
            while using ToolNest tools.
          </p>

        </div>

      </section>

      {/* Help Topics */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[40px] p-10 shadow-xl">

          <h2 className="text-4xl font-black mb-8">
            Frequently Asked Help Topics
          </h2>

          <div className="space-y-8 text-gray-600 leading-9 text-lg">

            {/* Topic */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                How do I merge PDFs?
              </h3>

              <p>
                Open the Merge PDF tool,
                upload your files,
                and click Merge PDF.
              </p>

            </div>

            {/* Topic */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Are my files uploaded?
              </h3>

              <p>
                No. All processing happens locally
                inside your browser.
              </p>

            </div>

            {/* Topic */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Is ToolNest free?
              </h3>

              <p>
                Yes. ToolNest tools are completely free to use.
              </p>

            </div>

            {/* Topic */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Why is processing taking time?
              </h3>

              <p>
                Large PDFs or images may take longer
                depending on your device performance.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}