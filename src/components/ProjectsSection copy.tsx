"use client";

import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 transition transform">
      <video
        src="/assets/videos/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-600">
        Projects
      </h3>

      <div className="grid md:grid-cols-4 gap-8">
        {Object.entries(projects).map(([key, project]: [string, Project]) => (
          <div
            key={key}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-6 flex flex-col"
          >
            {/* <video
              src="/assets/videos/bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            /> */}

            {/* แสดงรูปแรกของแต่ละโปรเจกต์ */}
            {project.images[0] && (
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            {/* ข้อมูลโปรเจกต์ */}
            <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
            <p className="mt-2 text-gray-600 flex-1">{project.description}</p>

            {/* ปุ่มดูเพิ่มเติม */}
            <Link
              href={`/projectScreen?project=${key}`}
              className="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium text-center hover:bg-indigo-700 transition"
            >
              ดูเพิ่มเติม →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
