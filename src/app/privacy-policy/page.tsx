import { Link } from "next-view-transitions";
import {
  Shield,
  Lock,
  FileCheck,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50 text-gray-900">

      {/* Navbar */}
      <nav className="flex items-center gap-6 px-8 py-5 backdrop-blur-xl bg-white/70 border-b border-white/30 sticky top-0 z-50">

        <Link
          href="/"
          className="px-5 py-2 rounded-xl bg-purple-600 text-white hover:scale-105 transition"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-14">

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-100 text-purple-700 font-semibold mb-8">
          <Shield size={20} />
          Your Data is Safe
        </div>

        <h1 className="text-6xl font-black leading-tight">
          Privacy
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            {" "}Policy
          </span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-9">
          At ToolNest, your privacy is our top priority.
          All file processing happens directly inside your browser.
          We do not upload, store, or access your files.
        </p>

      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-20">

        {/* Card 1 */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[32px] p-8 shadow-lg hover:scale-[1.02] transition">

          <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
            <Lock
              className="text-purple-600"
              size={30}
            />
          </div>

          <h3 className="text-2xl font-bold mb-4">
            No File Uploads
          </h3>

          <p className="text-gray-600 leading-8">
            Your files never leave your device.
            Everything is processed securely inside your browser.
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
            100% Secure
          </h3>

          <p className="text-gray-600 leading-8">
            We use secure browser-based processing
            to protect your PDFs and personal data.
          </p>

        </div>

        {/* Card 3 */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[32px] p-8 shadow-lg hover:scale-[1.02] transition">

          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
            <FileCheck
              className="text-blue-500"
              size={30}
            />
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Transparent Usage
          </h3>

          <p className="text-gray-600 leading-8">
            ToolNest does not track your files,
            document content, or personal information.
          </p>

        </div>

      </section>

      {/* Detailed Policy */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[40px] p-10 shadow-xl">

          <h2 className="text-4xl font-black mb-8">
            Detailed Privacy Policy
          </h2>

          <div className="space-y-8 text-gray-600 leading-9 text-lg">

            {/* Section */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Information Collection
              </h3>

              <p>
                ToolNest does not collect or store your uploaded files.
                All processing occurs locally in your browser.
              </p>

            </div>

            {/* Section */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                File Security
              </h3>

              <p>
                Since files remain on your device,
                your documents are never transmitted to external servers.
              </p>

            </div>

            {/* Section */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cookies
              </h3>

              <p>
                ToolNest may use basic browser cookies
                for improving user experience and analytics.
              </p>

            </div>

            {/* Section */}
            <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Updates
              </h3>

              <p>
                This privacy policy may be updated occasionally
                to reflect future improvements and services.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}