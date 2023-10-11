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

export interface Skill {
    title: string;
    icon: any;
    date: string;
}

export interface Project {
    title: string;
    description: string;
    image: any;
    source_code: string;
}

export interface Project1 {
    title: string;
    description: string;
    image: any;
    source_code: string;
}
