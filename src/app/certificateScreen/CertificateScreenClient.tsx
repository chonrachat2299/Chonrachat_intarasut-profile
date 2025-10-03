"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { certificate, Certificate } from "@/data/certificate";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function CertificateScreen() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [cert, setCert] = useState<Certificate | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setMounted(true); // รอให้ client render ก่อน
    const key = searchParams.get("certificate");
    if (key) setCert(certificate[key] ?? null);
  }, [searchParams]);

  if (!mounted) return null; // ระหว่าง SSR ให้ render ว่าง

  if (!cert) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6">
        <h2 className="text-4xl font-extrabold text-red-600 mb-4">ไม่พบ Certificate</h2>
        <p className="text-gray-700 mb-6">ตรวจสอบ URL หรือเลือก Certificate อื่น</p>
        <Link
          href="./"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition"
        >
          กลับไปหน้าแรก
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen bg-gray-50 py-16 px-4 flex justify-center">
        <div className="max-w-5xl bg-white rounded-2xl shadow-2xl p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-10">
          {/* Image carousel */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={cert.images[currentImage]}
                alt={`${cert.title} - image ${currentImage + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {cert.images.length > 1 && (
              <div className="flex justify-center gap-4 mt-2">
                {cert.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-3 h-3 rounded-full transition ${idx === currentImage ? "bg-indigo-600" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Certificate info */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">{cert.title}</h1>
            <p className="mt-4 md:mt-6 text-gray-600 text-lg md:text-xl leading-relaxed">{cert.description}</p>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center">{cert.title}</h2>
          <p className="text-gray-600 text-lg md:text-xl mb-12 text-center">{cert.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cert.images.map((img, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-48">
                  <Image src={img} alt={`${cert.title} - image ${idx + 1}`} fill className="object-cover" />
                </div>
                <p className="p-4 text-gray-700 text-center">{cert.imageDescriptions?.[idx] ?? `รูปที่ ${idx + 1}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}