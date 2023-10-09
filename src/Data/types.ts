import { StaticImageData } from "next/image";
import kazanexpress from "../../public/company/kazanexpress.png";
import provectus from "../../public/company/provectus.png";
import inno from "../../public/company/innopolis.png";
import bobcat from "../../public/company/bobcat.png";
// types.ts
export interface Experience {
    title: string;
    company_name: string;
    icon: any;
    iconBg: string;
    date: string;
    points: string[];
    icons: any[]; // Add an array of technology icons
}

// export const experiences = [
//     {
//         title: "UI/UX Designer",
//         company_name: "Kazan Express",
//         icon: kazanexpress,
//         iconBg: "#ff1919",
//         date: "Mar 2020 - Dec 2020",
//         points: [
//             "Executed Visual redesign of web applications and marketing for +20 new product categories (Shoes, plus-size).",
//             "Designed posters and various social media content for multiple clients.",
//             "Implemented responsive design and ensuring cross-browser compatibility.",
//         ],
//     },
//     {
//         title: "Product Designer",
//         company_name: "Provectus",
//         icon: provectus,
//         iconBg: "#ffffff",
//         date: "Apr 2021 - Dec 2021",
//         points: [
//             "Worked as a UI/UX designer on one of Provectus internal projects, Communicated with the product managers and the stakeholders weekly.",
//             "Designed  new features from scratch and revamped old ones to cope with the standards of the current market.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Innopolis Design Lab",
//         icon: inno,
//         iconBg: "#41ba21",
//         date: "Jan 2022 - Sep 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             " Designed UI & UX in collaboration with engineering & design teams.",
//             " Designed and modeled 3d products, made animations to add them to company projects.",
//         ],
//     },
//     {
//         title: "Front-End Developer",
//         company_name: "Doosan Bobcat",
//         icon: bobcat,
//         iconBg: "#ea401d",
//         date: "Jan 2023 - Apr 2022",
//         points: [
//             "Collaborated with cross-functional teams to define, design, and ship new web applications and features.",
//             " Designed 3D models and integrated them into the company's website. ",
//             " Designed UI & UX in collaboration with engineering & design teams. ",
//             "Participated in user testing and research to gain insights into user behavior.",
//         ],
//     },
// ];