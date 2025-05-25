// src/components/SearchBar.jsx
import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search todos...",
}) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-6">
      <div className="flex items-center bg-white border border-gray-300 rounded-none overflow-hidden">
        {/* Search icon */}
        <span className="px-3">
          <SearchSharpIcon fontSize="large" />
        </span>
        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 text-gray-900 placeholder-gray-400 bg-white border-none focus:outline-none focus:ring-0"
        />
        {/* Clear button */}
        {value && (
          <button
            onClick={() => onChange("")}
            className="px-3 hover:bg-gray-100 rounded-none transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
