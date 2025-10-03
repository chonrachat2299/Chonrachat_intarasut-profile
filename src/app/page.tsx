"use client";

import Image from "next/image";
import ProjectsSection from "@/components/ProjectsSection";
import Certificate from "@/components/Certificate";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">

      <Navbar />

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center relative text-white overflow-hidden">
        {/* วีดีโอพื้นหลัง */}
        <video
          src="/assets/videos/programing.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Layer มืดทับเพื่อให้ text ชัด */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* เนื้อหาข้างหน้า */}
        <div className="relative z-10">
          <Image src="/assets/images/myprofile.jpg" alt="Profile" width={160} height={160} className="rounded-full border-4 border-white shadow-lg mx-auto" />
          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            ชลชาติ อินทรสูตร
          </h2>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Full Stack Developer | Software Engineer
          </p>
          <a
            href="/assets/download/Chonlachat_Intarasut-Resume.pdf"
            download="Chonlachat_Intarasut-Resume.pdf"
            className="mt-6 inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            ดาวน์โหลด Resume
          </a>
          <a
            href="/personalRecord"
            className="mt-6 ml-6 inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            ดูประวัติส่วนตัว
          </a>
        </div>
      </section>


      {/* About */}
      <section id="about" className="container mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center text-indigo-600">About Me</h3>
        <div className="md:flex items-center gap-10 bg-white shadow-lg rounded-2xl p-10">
          <Image src="/assets/images/myprofile.jpg" alt="Profile" width={200} height={200} className="rounded-2xl shadow-md mx-auto md:mx-0" />
          <p className="mt-6 md:mt-0 text-lg leading-relaxed">
            ผมเป็นนักพัฒนาเว็บไซต์ที่มีประสบการณ์ทั้ง <span className="font-semibold text-indigo-600">Frontend</span> และ <span className="font-semibold text-indigo-600">Backend</span>.
            สนใจเทคโนโลยีใหม่ ๆ เช่น <span className="font-semibold">Next.js, React, electron ,  Node.js , php และ HTML </span>
            และมีความถนัดในการออกแบบระบบและฐานข้อมูล <span className="font-semibold">MySQL / MongoDB</span>.
          </p>
        </div>
      </section>

      <Skill />

      <div>
        <ProjectsSection />
      </div>

      <div>
        <Certificate />
      </div>



      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-20 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center text-indigo-600">Contact</h3>
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl mx-auto text-center">
          <p className="mb-6 text-gray-700">หากสนใจร่วมงาน หรือติดต่อสอบถามได้ทาง:</p>
          <ul className="space-y-4 text-lg">
            <li>📧 <span className="font-medium">pondpong2299@gmail.com</span></li>
            <li>📱 <span className="font-medium">065-392-9675</span></li>
            <li>🌐 <span className="font-medium"><a href="www.linkedin.com/in/ชลชาติ-อินทรสู๖ร-703358388">LinkedIn</a>  / <a href="https://github.com/ChonracahtPond">GitHub</a></span></li>
          </ul>
          <a href="mailto:pondpong2299@gmail.com" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow hover:bg-indigo-700 transition">
            ส่งอีเมลหาผม
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© 2025 <span className="text-indigo-400 font-medium">My Portfolio</span>. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
