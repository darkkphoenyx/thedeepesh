import { TimelineItem } from "@/interfaces/timelineData.interface";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

export const timelineData: TimelineItem[] = [
  {
    year: "DEC 2025 - PRESENT",
    title: "Frontend Developer Trainee",
    where: "Brahmabyte Lab",
    icon: BriefcaseBusiness,
    description: "Continuing on ChatBoq (SaaS product).",
    side: "right",
  },
  {
    year: "AUG 2025 - DEC 2025",
    title: "Frontend Developer Internship",
    where: "Brahmabyte Lab",
    icon: BriefcaseBusiness,
    description:
      "Worked on ChatBoq (SaaS product) using Next.js, handled state management with Zustand and Redux Toolkit, integrated REST APIs with Axios, and gained experience with SSR, sockets.io, email templates, and TipTap editor for web.",
    side: "left",
  },
  {
    year: "MAR 2025 - JUN 2025",
    title: "Full Stack Developer Internship",
    where: "Mindxcape",
    icon: BriefcaseBusiness,
    description:
      "Worked as a Full Stack Developer Intern at Mindxcape, where I developed and maintained Aktiverian Nepal’s website, collaborated on client web applications, and gained hands-on experience with Next.js and monorepo workflows.",
    side: "right",
  },
  {
    year: "2023 - Present",
    title: "BSc.CSIT Attended",
    where: "Tribhuvan University",
    icon: GraduationCap,
    description:
      "Working toward a Bachelor’s degree in CSIT, where I’m developing skills in software development, exploring algorithmic techniques, and strengthening my understanding of core computing concepts.",
    side: "left",
  },
  {
    year: "2020 - 2022",
    title: "+2 Science",
    where: "Nepal APF School",
    icon: GraduationCap,
    description:
      "Completed my Higher Secondary Education with a focus on Science and Mathematics.",
    side: "right",
  },
];
