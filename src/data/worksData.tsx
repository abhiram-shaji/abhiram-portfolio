// src/data/worksData.ts
import { ReactNode } from "react";

export interface WorkItem {
  company: string;
  role: string;
  logo: string;
  alt: string;
  content: ReactNode;
  link: string;
  linkText: string;
}

export const worksData: WorkItem[] = [
  {
    company: "The Digital Uplift",
    role: "Founder / Full Stack Developer",
    logo: "/digital-uplift-logo.png",
    alt: "The Digital Uplift logo",
    content: (
      <p>
        Started as the project 100 to help as many small businesses in British Columbia as
        possible establish a digital presence. I focus on streamlined development, skipping the
        agencies and middlemen. The stack includes Next.js, Shadcn for UI, SEO best practices,
        Google Analytics, and targeted Google Ads campaigns. A CMS and modular microservices
        ensure businesses survive and thrive in the digital age.
      </p>
    ),
    link: "https://www.thedigitaluplift.ca",
    linkText: "Visit Website",
  },
  {
    company: "Deloitte",
    role: "Associate Analyst",
    logo: "/deloitte.jpg",
    alt: "Deloitte logo",
    content: (
      <p>
        At Deloitte, I engineered lean backend and paired it with a fast, conversion-driven frontend - clear, responsive, and built to perform. I handled SEO strategy, integrated Google Analytics for actionable insights, and deployed a CMS to streamline client updates. I also brought certified social media marketing expertise to the table, using Ocoya, Hootsuite, and PredisAI to drive engagement and visibility across channels.
      </p>
    ),
    link: "https://www.linkedin.com/in/abhiram-kace/overlay/experience/2104080602/multiple-media-viewer/?profileId=ACoAACpIMvYBC8bbLb3t8Zx91NyKXw1kfG7t2k4&treasuryMediaId=1635513936154",
    linkText: "View Experience Letter (LinkedIn login required)",
  },

  {
    company: "Langroove",
    role: "Mobile Application Developer",
    logo: "/langroove.png",
    alt: "Langroove logo",
    content: (
      <p>
        Langroove is a social language learning app that helps users practice languages in
        real-time through interactive text conversations with built-in translation support. Built
        using React Native (Expo) and Firebase, it integrates third-party APIs for translations and
        offers a modern, accessible UI for all levels.
      </p>
    ),
    link: "https://learndigital.dev/students/abhiram-shaji/",
    linkText: "View Case Study",
  },
];
