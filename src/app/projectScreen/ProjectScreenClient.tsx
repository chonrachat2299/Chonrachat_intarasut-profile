"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ProjectScreenClient() {
  const searchParams = useSearchParams();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  // modal state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const projectKey = searchParams.get("project") as string | null;
    if (projectKey) {
      setProject(projects[projectKey] ?? null);
    }
  }, [searchParams]);

  if (!mounted) return null;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6">
        <h2 className="text-4xl font-extrabold text-red-600 mb-4">โปรเจกต์ไม่พบ</h2>
        <p className="text-gray-700 mb-6">ตรวจสอบ URL หรือเลือกโปรเจกต์อื่น</p>
        <Link
          href="/"
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="min-h-screen bg-gray-50 py-16 px-6 flex justify-center"
      >
        <div className="max-w-5xl bg-white rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10">
          {/* Image carousel */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div
              className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(project.images[currentImage])}
            >
              <Image
                src={project.images[currentImage]}
                alt={`${project.title} - image ${currentImage + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {project.images.length > 1 && (
              <div className="flex justify-center gap-4 mt-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition ${index === currentImage ? "bg-indigo-600" : "bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project info */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              {project.title}
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Image Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="min-h-screen bg-gray-50 py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center">
            {project.title}
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-12 text-center">
            {project.description}
          </p>
          <p className="text-gray-600 text-lg md:text-xl mb-12 text-center">
            <span className="font-extrabold text-gray-800">
              programing language (ภาษาที่ใช้) :
            </span>{" "}
            {project.details}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.images.map((imgSrc, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedImage(imgSrc)}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={imgSrc}
                    alt={`${project.title} - image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="p-4 text-gray-700 text-center">
                  {project.imageDescriptions?.[index] ?? `รูปที่ ${index + 1}`}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Full screen image"
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
