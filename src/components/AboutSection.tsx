"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="container mx-auto py-20 px-6">
            <h3 className="text-3xl font-bold mb-10 text-center text-indigo-600">About Me</h3>

            <motion.div
                initial={{ opacity: 0, y: 50 }}   // เริ่มจางและอยู่ต่ำลงมา 50px
                whileInView={{ opacity: 1, y: 0 }} // เวลาเข้ามาใน viewport ให้จางหาย + ขึ้นมา
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} // ให้เล่นครั้งเดียวตอนเลื่อนเห็น
                className="md:flex items-center gap-10 bg-white shadow-lg rounded-2xl p-10"
            >
                <Image
                    src="/assets/images/myprofile.jpg"
                    alt="Profile"
                    width={200}
                    height={200}
                    className="rounded-2xl shadow-md mx-auto md:mx-0"
                />
                <p className="mt-6 md:mt-0 text-lg leading-relaxed">
                    ผมเป็นนักพัฒนาเว็บไซต์ที่มีประสบการณ์ทั้ง{" "}
                    <span className="font-semibold text-indigo-600">Frontend</span> และ{" "}
                    <span className="font-semibold text-indigo-600">Backend</span>.
                    สนใจเทคโนโลยีใหม่ ๆ เช่น{" "}
                    <span className="font-semibold">Next.js, React, electron, Node.js, php และ HTML </span>
                    และมีความถนัดในการออกแบบระบบและฐานข้อมูล{" "}
                    <span className="font-semibold">MySQL / MongoDB</span>.
                </p>
            </motion.div>
        </section>
    );
}
