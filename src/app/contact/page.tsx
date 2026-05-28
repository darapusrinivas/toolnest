 "use client";

 import { Link } from "next-view-transitions";
import {
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">

      <Link href="/">
        <button className="mb-8 bg-purple-600 text-white px-5 py-2 rounded-lg hover:scale-105 transition">
          ← Back to Home
        </button>
      </Link>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">
          Contact Us
        </h1>

        <div className="space-y-6 text-lg">

          <div className="flex items-center gap-4">
                          <div className="flex items-center gap-4">
  <FaPhone className="text-blue-500 text-xl" />
  <a
    href="tel:+919381772492"
    className="text-blue-600 hover:underline"
  >
    +91 9381772492
  </a>
</div>
          </div>

          <div className="flex items-center gap-4">
             <FaWhatsapp className="text-green-500 text-xl" />
 <a
  href="https://wa.me/919381772492"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  https://wa.me/919381772492
</a>
          </div>

          <div className="flex items-center gap-4">
               <FaInstagram className="text-pink-500 text-xl" />
               <a
  href="https://instagram.com/srinivas_darapu"
  target="_blank"
  className="text-blue-600 hover:underline"
>
  https://www.instagram.com/srinivas_darapu/
</a>
          </div>

          <div className="flex items-center gap-4">
             <FaEnvelope className="text-red-500 text-xl" />
 <a
  href="mailto:darapusri@gmail.com"
  className="text-blue-600 hover:underline"
>
  darapusri@gmail.com
</a>
          </div>

        </div>
      </div>
    </main>
  );
}