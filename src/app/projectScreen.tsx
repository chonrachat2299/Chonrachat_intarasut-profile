// "use client";

// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";

// const projects = {
//     portfolio: {
//         title: "Portfolio Website",
//         description: "เว็บไซต์ส่วนตัวที่แสดงประวัติและผลงาน พร้อมฟีเจอร์ Dark Mode",
//         image: "/assets/images/cert-portfolio.jpg",
//         link: "https://example.com/portfolio",
//     },
//     gasapp: {
//         title: "แอพลิเคชั่น ขายแก๊สออนไลน์",
//         description: "แอพลิเคชั่น ซื้อขายแก๊ส มีระบบชำระเงิน, แก้ไข และติดตามความคืบหน้า",
//         image: "/assets/images/cert-gasapp.jpg",
//         link: "https://example.com/gasapp",
//     },
//     medical: {
//         title: "แอพพลิเคชั่น Medical",
//         description: "ระบบจัดการข้อมูลทหารใหม่, จัดการข้อมูลภายใน และวิเคราะห์ข้อมูลผ่าน Dashboard",
//         image: "/assets/images/cert-medical.jpg",
//         link: "https://example.com/medical",
//     },
// };

// export default function ProjectPage() {
//     const searchParams = useSearchParams();
//     const projectKey = searchParams.get("project") as keyof typeof projects; // 🔹 type-safe
//     const project = projectKey ? projects[projectKey] : null;

//     if (!project) {
//         return (
//             <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
//                 <h2 className="text-3xl font-bold text-red-600">โปรเจกต์ไม่พบ</h2>
//                 <Link
//                     href="/"
//                     className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//                 >
//                     กลับไปหน้าแรก
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 py-20 px-6 flex justify-center">
//             <div className="max-w-4xl bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
//                 <div className="relative w-full md:w-1/2 h-64 md:h-auto rounded-xl overflow-hidden">
//                     <Image
//                         src={project.image}
//                         alt={project.title}
//                         fill
//                         className="object-cover"
//                     />
//                 </div>
//                 <div className="flex-1 flex flex-col justify-center">
//                     <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
//                     <p className="mt-4 text-gray-600">{project.description}</p>
//                     <a
//                         href={project.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition w-max text-center"
//                     >
//                         ดูโปรเจกต์จริง
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// }



"use client";

import { useSearchParams } from "next/navigation";

const projects = {
    portfolio: { title: "Portfolio Website", description: "...", image: "/assets/images/cert-portfolio.jpg", link: "#" },
    gasapp: { title: "Gas App", description: "...", image: "/assets/images/cert-gasapp.jpg", link: "#" },
    medical: { title: "Medical App", description: "...", image: "/assets/images/cert-medical.jpg", link: "#" },
};

export default function ProjectScreen() {
    const searchParams = useSearchParams();
    const key = searchParams.get("project") as keyof typeof projects;
    const project = key ? projects[key] : null;

    if (!project) return <div>โปรเจกต์ไม่พบ</div>;

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
    );
}
