// src/data/certificate.ts


// export const certificate = [
//     {
//         title: "เกียรติบัตร ช่วยงานราชการ",
//         description: "ช่วยปฏิบัติงานราชการ ณ สนง. ประกันสุขภาพและประกันสังคม ศูนย์บริหารการเงิน",
//         image: "/assets/images/cert-portfolio.jpg", // วางรูปใน public/assets/images/
//         link: "/projectScreen?project=portfolio",
//     },
//     //   {
//     //     title: "แอพลิเคชั่น ขายแก๊สออนไลน์",
//     //     description: "แอพลิเคชั่น ซื้อขายแก๊ส มีระบบชำระเงิน, แก้ไข และติดตามความคืบหน้า",
//     //     image: "/assets/images/cert-gasapp.jpg",
//     //     link: "https://example.com/gasapp",
//     //   },
//     //   {
//     //     title: "โปรแกรมทางการเงิน สปสช. และ ประกันสังคม",
//     //     description: "ระบบจัดการดูแลและออกรายงาน, จัดทำงานประมาณ และระบบวิเคราะห์ข้อมูลหน้า Dashboard อื่นๆ",
//     //     image: "/assets/images/cert-finance.jpg",
//     //     link: "https://example.com/finance",
//     //   },
//     //   {
//     //     title: "แอพพลิเคชั่น Medical",
//     //     description: "ระบบจัดการข้อมูลทหารใหม่, จัดการข้อมูลภายใน และวิเคราะห์ข้อมูลผ่าน Dashboard",
//     //     image: "/assets/images/cert-medical.jpg",
//     //     link: "https://example.com/medical",
//     //   },
// ];

// export default certificate;

"use client";

export type Certificate = {
    title: string;
    description: string;
    link: string;
    images: string[];            // หลายรูปภาพ
    details: string[];           // รายละเอียดหลายบรรทัด
    imageDescriptions: string[]; // รายละเอียดแต่ละรูป
};

export const certificate: Record<string, Certificate> = {
    portfolio1: {
        title: "เกียรติบัตร ช่วยงานราชการ",
        description: "ช่วยปฏิบัติงานราชการ ณ สนง. ประกันสุขภาพและประกันสังคม ศูนย์บริหารการเงิน",
        details: [
            "ใช้ Next.js, TypeScript และ TailwindCSS",
            "รองรับ Dark Mode และ Responsive Design",
            "แสดงหน้า About, Projects และ Contact",
        ],
        images: [
            "/assets/images/portfolio1/cert-portfolio.jpg",
            "/assets/images/portfolio1/portfolio1-1.jpg",
            "/assets/images/portfolio1/portfolio1-2.jpg",
            "/assets/images/portfolio1/portfolio1-3.jpg",
        ],
        imageDescriptions: [
            "เกียรติบัตรหลักของงาน",
            "ภาพตัวอย่างโครงการ 1",
            "ภาพตัวอย่างโครงการ 2",
            "ภาพตัวอย่างโครงการ 3",
        ],
        link: "/certificateScreen?certificate=portfolio1",
    },
    // portfolio2: {
    //     title: "Certificate ตัวอย่างเพิ่มเติม",
    //     description: "รายละเอียดของ Certificate ตัวอย่างที่สอง",
    //     details: [
    //         "ใช้ React และ TailwindCSS",
    //         "ออกแบบ Responsive Design",
    //     ],
    //     images: [
    //         "/assets/images/portfolio2/cert2.jpg",
    //         "/assets/images/portfolio2/cert2-1.jpg",
    //     ],
    //     imageDescriptions: [
    //         "Certificate หลัก",
    //         "ภาพประกอบโครงการ",
    //     ],
    //     link: "/certificateScreen?certificate=portfolio2",
    // },
};
