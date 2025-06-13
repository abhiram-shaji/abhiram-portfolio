'use client';

import { projects } from '@/data/projectsData';
import ProjectsHeader from '@/components/ProjectsHeader';
import ProjectCard from '@/components/ProjectCard';
import Head from 'next/head';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Abhiram Shaji</title>
        <meta
          name="description"
          content="A collection of projects built by Abhiram Shaji using modern web technologies."
        />
        <meta property="og:title" content="Abhiram Shaji Projects" />
        <meta
          property="og:description"
          content="Browse development work and open-source contributions by Abhiram Shaji."
        />
        <meta property="og:image" content="/profile-img.jpg" />
      </Head>
      <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
        <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
          <ProjectsHeader />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
