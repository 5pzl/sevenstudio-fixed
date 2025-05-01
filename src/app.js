import { useState } from "react";
import {
  DownloadCloud,
  Palette,
  Video,
  Heart,
  Mail,
  Instagram,
  Search,
  X,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

const links = [
  {
    icon: <DownloadCloud className="text-[#fddf4a]" />,
    title: "Prompts",
    action: "Download",
    url: "https://sevenstudio2.gumroad.com/",
  },
  {
    icon: <Palette className="text-[#fddf4a]" />,
    title: "Graphics Packs",
    action: "Download",
    url: "https://sevenstudio2.gumroad.com/",
  },
  {
    icon: <Video className="text-[#fddf4a]" />,
    title: "Tutorial",
    action: "Watch",
  },
  {
    icon: <Heart className="text-[#fddf4a]" />,
    title: "Support",
    action: "Donate",
  },
  {
    icon: <Mail className="text-[#fddf4a]" />,
    title: "Newsletter",
    action: "Subscribe",
  },
];

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen animated-gradient text-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-[#0f1f1c]/80 backdrop-blur-md custom-glow rounded-2xl border border-[#1a3a34] shadow-lg">
        <div className="border-b border-[#1a3a34] p-4 flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold text-[#fddf4a]">SevenStudio</h1>
          <div className="flex items-center gap-3 w-full bg-[#112622] border border-[#1a3a34] rounded-lg px-4 py-2">
            <Search className="text-[#CCCCCC] w-5 h-5" />
            <input
              type="text"
              className="bg-transparent outline-none flex-1 placeholder-[#88aaa0] text-white"
              placeholder="Search for Prompts, Newsletter, ..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="divide-y divide-[#1a3a34]">
          {links
            .filter((link) =>
              link.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((link) => (
              <a
                href={link.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                key={link.title}
                className="flex items-center justify-between px-4 py-3 hover:bg-[#1a3a34]/40 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span>{link.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">
                      {link.title}
                    </span>
                    <span className="text-gray-400 text-xs">{link.action}</span>
                  </div>
                </div>
              </a>
            ))}
        </div>
        <div className="border-t border-[#1a3a34] p-6 flex justify-center">
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/sevenstudios_7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Instagram className="w-6 h-6 text-[#fddf4a]" />
            </a>
            <a href="#" className="hover:opacity-80">
              <X className="w-6 h-6 text-[#fddf4a]" />
            </a>
            <a
              href="mailto:sevenstudio.sev@gmail.com"
              className="hover:opacity-80"
            >
              <Mail className="w-6 h-6 text-[#fddf4a]" />
            </a>
            <a
              href="https://www.tiktok.com/@sevenstudios_7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <SiTiktok className="w-6 h-6 text-[#fddf4a]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
