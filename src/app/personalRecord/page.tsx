"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function PersonalRecord() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-16 px-6">
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="relative w-40 h-40">
                            <Image
                                src="/assets/images/myprofile.jpg"
                                alt="Profile Picture"
                                fill
                                className="rounded-full object-cover shadow-md"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl font-extrabold text-indigo-700">
                                นาย ชลชาติ อินทรสูตร
                            </h1>
                            <p className="mt-2 text-lg text-gray-600">
                                Full-Stack Developer | Web & Mobile Engineer
                            </p>
                            <p className="text-gray-500 text-sm">
                                นครราชสีมา, ประเทศไทย | พร้อมเรียนรู้สิ่งใหม่และทำงานเป็นทีม
                            </p>
                            <div className="mt-4 flex justify-center md:justify-start gap-4">
                                <a
                                    href="mailto:pondpong2299@gmail.com"
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                                >
                                    Email
                                </a>
                                <a
                                    href="https://github.com/ChonracahtPond"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="www.linkedin.com/in/ชลชาติ-อินทรสู๖ร-703358388"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://line.me/ti/p/rP80-qCwb8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                                >
                                    Line
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-12 space-y-12">
                        {/* Education */}
                        <section>
                            <h2 className="text-2xl font-bold text-indigo-600 mb-4">การศึกษา</h2>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>
                                    มัธยมปลาย คอมพิวเตอร์บริหารธุรกิจ - โรงเรียนบุญเหลือวิทยาณุสรณ์ (2016 - 2019)
                                </li>
                                <li>
                                    ประกอบวิชาชีพ(ปวช.) คอมพิวเตอร์บริหารธุรกิจ - มหาวิทยาลัย วิทยาลัยเทคนิคนครโคราช (2016 - 2019)
                                </li>
                                <li>
                                    ปริญญาตรี คอมพิวเตอร์บริหารธุรกิจ - มหาวิทยาลัย เทคโนโลยีราชมงคลอีสาน (2019 - 2023)
                                </li>
                                {/* <li>ประกาศนียบัตร Web Development - สถาบัน B (2019)</li> */}
                            </ul>
                        </section>

                        {/* Work Experience */}
                        <section>
                            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                                ประสบการณ์ทำงาน
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Full-Stack Developer , website and application mobile - บริษัทเฉลิมชัยก๊าซ (ให้บริการและจำหน่ายแก๊ส)
                                    </h3>
                                    <p className="text-gray-600 text-sm">2023 - 2024</p>
                                    <ul className="list-disc pl-6 text-gray-700 text-sm mt-2 space-y-1">
                                        <li>ออกแบบและพัฒนาเว็บแอปด้วย Next.js + Node.js</li>
                                        <li>ออกแบบและพัฒนาเว็บแอป ขายสินค้าหน้าร้าน</li>
                                        <li>ออกแบบและพัฒนาแอปพลิเคชั่นด้วย React Native</li>
                                        <li>พัฒนา REST API , RESTfull API และ ออกแบบฐานข้อมูล</li>
                                        <li>ทำ CI/CD ด้วย Docker และ GitHub Actions</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Full-Stack Developer - โรงพยาบาลพระมงกุฏเกล้า
                                    </h3>
                                    <p className="text-gray-600 text-sm">2024 - 2025</p>
                                    <ul className="list-disc pl-6 text-gray-700 text-sm mt-2 space-y-1">
                                        <li>พัฒนา โปรแกรมการเงิน ด้วย Electron ภาษาที่ใช้ html , javascript</li>
                                        <li>เชื่อมต่อแบบ offline , LAN กับฐานข้อมูล และปรับปรุง Performance</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Mobile Developer - ค่ายทหาร(รพ.รร.6)
                                    </h3>
                                    <p className="text-gray-600 text-sm">2024 - 2025</p>
                                    <ul className="list-disc pl-6 text-gray-700 text-sm mt-2 space-y-1">
                                        <li>พัฒนา Mobile App ด้วย React Native</li>
                                        <li>เชื่อมต่อ API และปรับปรุง Performance</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h2 className="text-2xl font-bold text-indigo-600 mb-4">ทักษะ</h2>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Next.js",
                                    "React",
                                    "TypeScript",
                                    "TailwindCSS",
                                    "Node.js",
                                    "Express",
                                    "MongoDB",
                                    "MySQL",
                                    "React Native",
                                    "Docker",
                                    "GitHub Actions",
                                ].map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 text-sm shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Certificates */}
                        <section>
                            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                                Certificates & Achievements
                            </h2>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                {/* <li>เกียรติบัตร การพัฒนาเว็บไซต์ด้วย Next.js (2023)</li> */}
                                <li>เกียรติบัตร ช่วยปฏิบัติงานราชการ ณ สนง. ประกันสุขภาพและประกันสังคม ศูนย์บริหารการเงิน (2025)</li>
                                <li>รางวัลชนะเลิศประกวดผลงานทางเทคโนโลยี ด้าน Programing ตัวแทนโรงพยาบาล (2025)</li>
                                <li>รางวัลชนะเลิศประกวดผลงานทางเทคโนโลยี ด้าน Mobile App ตัวแทนค่าย (2025)</li>
                            </ul>
                        </section>

                        {/* Interests */}
                        <section>
                            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                                ความสนใจ
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                สนใจด้านการพัฒนาเว็บ แอปพลิเคชันมือถือ โปรแกรม ปัญญาประดิษฐ์ และ
                                Cybersecurity ชอบอ่าน Documents เทคโนโลยีใหม่ ๆ และการทำงานร่วมกับทีม
                                เพื่อสร้างโซลูชันที่ช่วยพัฒนาชีวิตประจำวัน
                            </p>
                        </section>
                    </div>

                    {/* Footer */}
                    <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
                        © 2025 ชลชาติ อินทรสูตร. All rights reserved.
                    </div>
                </div>
            </div>
        </>
    );
}
