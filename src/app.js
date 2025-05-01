import React from "react";
import { FaDownload, FaPalette, FaVideo, FaHeart, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaTiktok, FaEnvelope as FaEmail } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001a1a] via-[#0b2e2e] to-[#002b1f] flex items-center justify-center">
      <div className="bg-[#0f1f1c]/80 rounded-2xl shadow-[0_0_20px_5px_rgba(253,223,74,0.5)] p-8 max-w-lg text-center text-white">
        {/* Header */}
        <h1 className="text-3xl font-bold text-[#fddf4a]">SevenStudio</h1>

        {/* Search Input */}
        <div className="relative my-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 bg-[#112622] rounded-md text-[#88aaa0] focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 right-4 w-5 h-5 text-gray-400 transform -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
            />
          </svg>
        </div>

        {/* Links */}
        <ul className="space-y-4">
          {[
            { icon: FaDownload, title: "Prompts", action: "Download" },
            { icon: FaPalette, title: "Graphics Packs", action: "Explore" },
            { icon: FaVideo, title: "Tutorial", action: "Watch" },
            { icon: FaHeart, title: "Support Us", action: "Donate" },
            { icon: FaEnvelope, title: "Contact Us", action: "Mail" },
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between bg-[#112622] rounded-md px-4 py-3 hover:bg-[#0b2e2e] transition"
            >
              <div className="flex items-center space-x-2">
                <item.icon className="text-[#fddf4a]" />
                <span className="font-medium">{item.title}</span>
              </div>
              <span className="text-sm text-[#88aaa0]">{item.action}</span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="flex justify-center space-x-4 mt-6">
          {[FaInstagram, FaTwitter, FaTiktok, FaEmail].map((Icon, idx) => (
            <Icon
              key={idx}
              className="text-[#fddf4a] hover:text-[#d8c038] text-xl cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
