"use client";

import Image from "next/image";
import { certificate } from "@/data/certificate";
import { motion } from "framer-motion";

export default function CertificateSection() {
  return (
    <section id="certificates" className="py-20 px-6 bg-gray-100">
      <h3 className="text-3xl font-bold mb-12 text-center text-indigo-600">
        Certificates & Achievements
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Object.values(certificate).map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* แสดงภาพแรกจาก images */}
            <div className="w-32 h-32 relative mb-4">
              <Image
                src={cert.images[0]}
                alt={cert.title}
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* ชื่อ Certificate */}
            <h4 className="text-lg font-semibold text-gray-800 text-center">
              {cert.title}
            </h4>

            {/* คำอธิบายสั้น */}
            <p className="mt-2 text-gray-600 text-center text-sm">
              {cert.description}
            </p>

            {/* ปุ่มดูเพิ่มเติม */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm"
            >
              ดูเพิ่มเติม
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
