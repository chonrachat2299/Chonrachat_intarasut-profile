"use client";  // 🔹 เพิ่มบรรทัดนี้

import React from "react";
import Image from "next/image";
import { skills } from "@/data/skill";
import { motion } from "framer-motion";

const Skill: React.FC = () => {
  return (
    <section id="skills" className="bg-gray-100 py-20 px-6">
      <h3 className="text-3xl font-bold mb-10 text-center text-indigo-600">
        Skills
      </h3>
      <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-white rounded-xl shadow p-6 text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}      // เริ่มซ่อน + เลื่อนลง 30px
            whileInView={{ opacity: 1, y: 0 }}  // เมื่อเข้ามาใน viewport
            viewport={{ once: true, amount: 0.3 }} // เล่นครั้งเดียว, 30% ของ element ปรากฏ
            transition={{ duration: 0.6, delay: index * 0.1 }} // delay เพิ่มตาม index
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold">{skill.name}</h4>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
              <div
                className="bg-indigo-500 h-3 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
