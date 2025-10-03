"use client";
import Image from "next/image";
import ProjectsSection from "@/components/ProjectsSection";
import Certificate from "@/components/Certificate";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div className="bg-red-50 text-gray-900">
      {/* Navbar */}
      {/* <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-extrabold text-indigo-600 tracking-wide">MyPortfolio</h1>
          <ul className="flex space-x-6 font-medium">
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
            <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>
      </nav> */}
      <Navbar />

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <Image src="/assets/images/myprofile.jpg" alt="Profile" width={160} height={160} className="rounded-full border-4 border-white shadow-lg mx-auto" />
          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold drop-shadow-lg">ชลชาติ อินทรสูตร</h2>
          <p className="mt-4 text-lg md:text-xl opacity-90">Full Stack Developer | Software Engineer</p>
          <a href="/cv.pdf" className="mt-6 inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105">
            ดาวน์โหลด CV
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

      {/* Skills */}
      {/* <section id="skills" className="bg-gray-100 py-20 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center text-indigo-600">Skills</h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {["Next.js", "React", "Node.js", "PHP", "HTML", "TailwindCSS", "MySQL", "MongoDB"].map((skill) => (
            <div key={skill} className="bg-white rounded-xl shadow p-6 text-center hover:shadow-xl transition">
              <h4 className="text-xl font-semibold">{skill}</h4>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                <div className="bg-indigo-500 h-3 rounded-full" style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <Skill />


      {/* Projects */}
      {/* <section id="projects" className="py-20 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center text-indigo-600">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 p-6">
              <h4 className="text-xl font-semibold text-gray-800">Project {item}</h4>
              <p className="mt-3 text-gray-600">
                รายละเอียดสั้นๆ ของผลงาน เช่น เว็บไซต์ระบบจัดการข้อมูล หรือเว็บแอปพลิเคชัน.
              </p>
              <a href="#" className="text-indigo-600 mt-4 inline-block font-medium hover:underline">ดูเพิ่มเติม →</a>
            </div>
          ))}
        </div>
      </section> */}
      {/* <section id="projects" className="py-20 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center text-indigo-600">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 p-6"
            >
              <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
              <p className="mt-3 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="text-indigo-600 mt-4 inline-block font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ดูเพิ่มเติม →
              </a>
            </div>
          ))}
        </div>
      </section> */}




      {/* Certificate */}
      {/* <section id="Certificate" className="py-20 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center text-indigo-600">Certificate</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 p-6">
              <h4 className="text-xl font-semibold text-gray-800">Project {item}</h4>
              <p className="mt-3 text-gray-600">
                รายละเอียดสั้นๆ ของผลงาน เช่น ใบประกาศณียบัตร.
              </p>
              <a href="#" className="text-indigo-600 mt-4 inline-block font-medium hover:underline">ดูเพิ่มเติม →</a>
            </div>
          ))}
        </div>
      </section> */}


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
            <li>📧 <span className="font-medium">pondpong2299@mail.com</span></li>
            <li>📱 <span className="font-medium">065-392-9675</span></li>
            <li>🌐 <span className="font-medium"><a href="www.linkedin.com/in/ชลชาติ-อินทรสู๖ร-703358388">LinkedIn</a>  / <a href="https://github.com/ChonracahtPond">GitHub</a></span></li>
          </ul>
          <a href="mailto:example@mail.com" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow hover:bg-indigo-700 transition">
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
