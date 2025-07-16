// data/workData.ts
import type { ReactNode } from 'react';

export interface WorkItem {
  company: string;
  role: string;
  logo: string;
  alt?: string;
  modalContent: ReactNode;
}

export const works: WorkItem[] = [
  {
    company: 'The Digital Uplift',
    role: 'Founder / Full Stack Developer',
    logo: '/digital-uplift-logo.png',
    alt: 'The Digital Uplift logo',
    modalContent: (
      <>
        <p>
          Not officially launched — this is my personal mission to help as many small businesses in British Columbia as possible establish a digital presence. I focus on streamlined development, skipping the agencies and middlemen.
        </p>
        <p>
          The stack includes Next.js, Shadcn for UI, SEO best practices, Google Analytics, and targeted Google Ads campaigns. A CMS and modular microservices ensure businesses survive and thrive in the digital age.
        </p>
        <a
          href="https://the-digital-uplift-18cxg1vk9-abhiram-shajis-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Visit Project
        </a>
      </>
    ),
  },
  {
    company: 'Deloitte',
    role: 'Associate Analyst',
    logo: '/deloitte.jpg',
    alt: 'Deloitte logo',
    modalContent: (
      <>
        <p>
          I researched and created the most efficient back end, followed by the cleanest, not-cluttered, straight-to-the-point front end — fast, attention-grabbing, and conversion-focused.
        </p>
        <p>
          I ensured best-in-class SEO, integrated Google Analytics for valuable traffic data, and implemented a CMS to simplify client workflows.
        </p>
        <p>
          I&apos;m also certified in social media marketing and used tools like Ocoya, Hootsuite, and PredisAI to boost visibility and engagement.
        </p>
        <a
          href="https://www.linkedin.com/in/abhiram-kace/overlay/experience/2104080602/multiple-media-viewer/?profileId=ACoAACpIMvYBC8bbLb3t8Zx91NyKXw1kfG7t2k4&treasuryMediaId=1635513936154"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          View Experience Letter (LinkedIn login required)
        </a>
      </>
    ),
  },
  {
    company: 'Figs Deli',
    role: 'Freelance Web Developer',
    logo: '/fig.png',
    alt: 'Figs Deli logo',
    modalContent: (
      <>
        <p>
          I created a sleek Next.js website with a clean UI, SEO optimization, and Google Analytics integration.
        </p>
        <p>
          The site will be deployed to their custom domain soon.
        </p>
        <a
          href="https://fig-deli-website.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Preview Website
        </a>
      </>
    ),
  },
  {
    company: 'Langroove',
    role: 'Mobile Application Developer',
    logo: '/langroove.png',
    alt: 'Langroove logo',
    modalContent: (
      <>
        <p>
          Langroove is a social language learning app that helps users practice languages in real-time through interactive text conversations with built-in translation support.
        </p>
        <p>
          Built using React Native (Expo) and Firebase, it integrates third-party APIs for translations and offers a modern, accessible UI for all levels.
        </p>
        <a
          href="https://learndigital.dev/students/abhiram-shaji/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          View Case Study
        </a>
      </>
    ),
  },
];
