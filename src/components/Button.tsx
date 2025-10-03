// src/components/Button.tsx
"use client";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
