"use client";

// import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section id="contact" className="bg-gray-100 py-20 px-6">
            <h3 className="text-3xl font-bold mb-10 text-center text-indigo-600">
                Contact
            </h3>

            <motion.div
                initial={{ opacity: 0, y: 50 }}   // เริ่มจางและอยู่ต่ำลงมา
                whileInView={{ opacity: 1, y: 0 }} // เวลาเข้ามาใน viewport
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white shadow-xl rounded-2xl p-10 max-w-xl mx-auto text-center"
            >
                <p className="mb-6 text-gray-700">
                    หากสนใจร่วมงาน หรือติดต่อสอบถามได้ทาง:
                </p>

                <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2, // แสดงทีละ item
                            },
                        },
                    }}
                    className="space-y-4 text-lg"
                >
                    {[
                        "📧 pondpong2299@gmail.com",
                        "📱 065-392-9675",
                        "🌐 LinkedIn / GitHub",
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {index === 0 && (
                                <>
                                    📧 <span className="font-medium">pondpong2299@gmail.com</span>
                                </>
                            )}
                            {index === 1 && (
                                <>
                                    📱 <span className="font-medium">065-392-9675</span>
                                </>
                            )}
                            {index === 2 && (
                                <>
                                    🌐{" "}
                                    <span className="font-medium">
                                        <a
                                            href="www.linkedin.com/in/ชลชาติ-อินทรสู๖ร-703358388"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            LinkedIn
                                        </a>{" "}
                                        /{" "}
                                        <a
                                            href="https://github.com/ChonracahtPond"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            GitHub
                                        </a>
                                    </span>
                                </>
                            )}
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.a
                    href="mailto:pondpong2299@gmail.com"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow hover:bg-indigo-700 transition"
                >
                    ส่งอีเมลหาผม
                </motion.a>
            </motion.div>
        </section>
    );
}
