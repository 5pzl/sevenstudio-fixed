import { useState } from "react";

export default function CommandPalette() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="p-8 rounded-xl border border-white max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4">SevenStudio</h1>
        <input
          type="text"
          className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="mt-4 text-sm text-gray-400">Query: {query}</p>
      </div>
    </div>
  );
}
