
// export const projects = [
//     {
//         title: "Portfolio Website",
//         description: "เว็บไซต์ส่วนตัวที่แสดงประวัติและผลงาน พร้อมฟีเจอร์ Dark Mode",
//         link: "/projectScreen?project=portfolio", // ✅ ใช้ route + query string
//     },
//     // {
//     //     title: "E-commerce App",
//     //     description: "เว็บแอปขายสินค้าออนไลน์ มีระบบตะกร้าสินค้าและการชำระเงิน",
//     //     link: "https://example.com/ecommerce",
//     // },
//     {
//         title: "แอพลิเคชั่น ขายแก๊สออนไลน์",
//         description: "แอพลิเคชั่น ซื้อขายแก๊ส มีระบบชำระเงิน, แก้ไข และติดตามความคืบหน้า",
//         link: "https://example.com/task-manager",
//     },
//     {
//         title: "โปรแกรมทางการเงิน สปสช. และ ประกันสังคม",
//         description: "ระบบจัดการดูแลและออกรายงาน, จัดทำงานประมาณ และระบบวิเคราะห์ข้อมูลหน้า Dashboard อื่นๆ",
//         link: "https://example.com/task-manager",
//     },
//     {
//         title: "แอพพลิเคชั่น Medical",
//         description: "แอพพลิเคชั่น medical-ร้อยพลเสนาร์กษ์ ระบบจัดการข้อมูลทหารใหม่ , จัดการข้อมูลภายในของทหารใหม่ และ วิเคราะห์ข้อมูลผ่านทางหน้า Dashboard อื่นๆ",
//         link: "https://example.com/task-manager",
//     },
//     // {
//     //     title: "Task Manager",
//     //     description: "เว็บแอปจัดการงาน มีระบบสร้างงาน, แก้ไข และติดตามความคืบหน้า",
//     //     link: "https://example.com/task-manager",
//     // },
// ];


// export default projects;



// export type Project = {
//     title: string;
//     description: string;
//     image: string;
//     link: string;
// };

// // ใช้ key เป็น project name เพื่อดึงข้อมูลแบบ dynamic
// export const projects: Record<string, Project> = {
//     portfolio: {
//         title: "Portfolio Website",
//         description:
//             "เว็บไซต์ส่วนตัวที่แสดงประวัติและผลงาน พร้อมฟีเจอร์ Dark Mode",
//         image: "/assets/images/webprofile/webprofile.png",
//         link: "/projectScreen?project=portfolio",
//     },
//     gasapp: {
//         title: "แอพลิเคชั่น ขายแก๊สออนไลน์",
//         description:
//             "แอพลิเคชั่น ซื้อขายแก๊ส มีระบบชำระเงิน, แก้ไข และติดตามความคืบหน้า",
//         image: "/assets/images/cert-gasapp.jpg",
//         link: "https://example.com/task-manager",
//     },
//     finance: {
//         title: "โปรแกรมทางการเงิน สปสช. และ ประกันสังคม",
//         description:
//             "ระบบจัดการดูแลและออกรายงาน, จัดทำงานประมาณ และระบบวิเคราะห์ข้อมูลหน้า Dashboard อื่นๆ",
//         image: "/assets/images/pmk/ICONPMK.png",
//         link: "https://example.com/task-manager",
//     },
//     medical: {
//         title: "แอพพลิเคชั่น Medical",
//         description:
//             "แอพพลิเคชั่น medical-ร้อยพลเสนาร์กษ์ ระบบจัดการข้อมูลทหารใหม่ , จัดการข้อมูลภายในของทหารใหม่ และ วิเคราะห์ข้อมูลผ่านทางหน้า Dashboard อื่นๆ",
//         image: "/assets/images/cert-medical.jpg",
//         link: "https://example.com/task-manager",
//     },
// };
"use client";

export type Project = {
    title: string;
    description: string;
    link: string;
    images: string[];   // หลายรูปภาพ
    details: string[];  // รายละเอียดหลายบรรทัด
    imageDescriptions: string[];  // รายละเอียดหลายบรรทัด
};

export const projects: Record<string, Project> = {
    portfolioWebsite: {
        title: "Portfolio Website",
        description: "เว็บไซต์ส่วนตัวที่แสดงประวัติและผลงาน พร้อมฟีเจอร์ Dark Mode",
        details: [
            "ใช้ Next.js, TypeScript และ TailwindCSS",
            "รองรับ Dark Mode และ Responsive Design",
            "แสดงหน้า About, Projects และ Contact",
        ],
        images: [
            // "/assets/images/webprofile/webprofile.png",
            "/assets/images/webprofile/webprofile1.png",
            "/assets/images/webprofile/webprofile2.png",
            "/assets/images/webprofile/webprofile3.png",
            "/assets/images/webprofile/webprofile4.png",
            "/assets/images/webprofile/webprofile5.png",
            "/assets/images/webprofile/webprofile6.png",
        ],
        imageDescriptions: [
            // "1",
            // "2",
            // "3",
            // "4",
        ],
        link: "/projectScreen?project=portfolioWebsite",
    },
    gasfactory: {
        title: "Website โรงงานแก๊ส",
        description: "พัฒนา Website ซื้อ-ขายแก๊สในโรงงานบรรจุแก๊ส มีระบบชำระเงิน (เฉพาะเจ้าหน้าที่), ตัดสต๊อกและเติมสต๊อก ออกบิลเงินสดและรายงาน",
        details: [
            "ระบบสั่งซื้อแก๊สออนไลน์",
            "ระบบชำระเงินออนไลน์และติดตามออเดอร์",
        ],
        images: ["/assets/images/gasfactory/gasfactory_login.png",
            "/assets/images/gasfactory/gasfactory.png",
            "/assets/images/gasfactory/gasfactory1.png",
            "/assets/images/gasfactory/gasfactory2.png",
        ],
        imageDescriptions: [
            // "1",
            // "2",
            // "3",
            // "4",

        ],
        link: "/projectScreen?project=gasfactory",
    },
    gasshop: {
        title: "Website ขายแก๊สออนไลน์(เฉพาะพนักงานหน้าร้าน)",
        description: "พัฒนา Website ซื้อ-ขายแก๊ส มีระบบชำระเงิน (เฉพาะเจ้าหน้าที่), ส่วนลด , แต้ม , ตัดสต๊อกและเติมสต๊อก ออกบิลเงินสดและรายงาน",
        details: [
            "ระบบสั่งซื้อแก๊สออนไลน์",
            "ระบบชำระเงินออนไลน์และติดตามออเดอร์",
        ],
        images: ["/assets/images/gasshop/gasshop_1.png",
            "/assets/images/gasshop/gasshop_2.png"
        ],
        imageDescriptions: [
            // "1",
            // "2",
            // "3",
            // "4",
        ],
        link: "/projectScreen?project=gasshop",
    },
    gasapp: {
        title: "แอพลิเคชั่น ขายแก๊สออนไลน์",
        description: "แอพลิเคชั่น ซื้อขายแก๊ส มีระบบชำระเงิน, และติดตามความคืบหน้าของขนส่ง ",
        details: [
            "ระบบสั่งซื้อแก๊สออนไลน์",
            "ระบบชำระเงินออนไลน์และติดตามออเดอร์",
        ],
        images: [
            "/assets/images/appgas/appgas_banner_2.png",
            "/assets/images/appgas/appgas_icon.png",
            "/assets/images/appgas/appgas_banner_1.png",
            "/assets/images/appgas/appgas1.png",
            "/assets/images/appgas/appgas2.png",
            "/assets/images/appgas/appgas3.png",
            "/assets/images/appgas/appgas4.png",

        ],
        imageDescriptions: [
            // "1",
            // "2",
            // "3",
            // "4",

        ],
        link: "/projectScreen?project=gasapp",
    },
    finance: {
        title: "โปรแกรมทางการเงิน สปสช. และ ประกันสังคม",
        description:
            "ระบบจัดการดูแลและออกรายงาน, จัดทำงานประมาณ และระบบวิเคราะห์ข้อมูลหน้า Dashboard อื่นๆ",
        details: [
            "ระบบสั่งซื้อแก๊สออนไลน์",
            "ระบบชำระเงินออนไลน์และติดตามออเดอร์",
        ],
        images: [
            "/assets/images/pmk/ICONPMK.png",
            "/assets/images/pmk/pmk1.png",
            "/assets/images/pmk/pmk2.png",
            "/assets/images/pmk/pmk3.png",
            "/assets/images/pmk/pmk4.png",
            "/assets/images/pmk/pmk5.png",
        ],
        imageDescriptions: [
            // "1",
            // "2",
            // "3",
            // "4",
        ],

        link: "/projectScreen?project=finance",
    },

    medical: {
        title: "แอพพลิเคชั่น Medical",
        description: "ระบบจัดการข้อมูลทหารใหม่ และ Dashboard วิเคราะห์ข้อมูล",
        details: [
            "จัดการข้อมูลทหารใหม่",
            "Dashboard สำหรับวิเคราะห์ข้อมูล",
        ],
        images: [
            "/assets/images/medical/medicalLogo.png",
            "/assets/images/medical/medical1.png",
            "/assets/images/medical/medical2.png",
            "/assets/images/medical/medical3.png",
            "/assets/images/medical/medical4.png",
            "/assets/images/medical/medical5.png",
            "/assets/images/medical/medical6.png",
        ],
        imageDescriptions: [
            // "1",
            // "2",
            // "3",
            // "4",
        ],
        link: "/projectScreen?project=medical",
    },
};
