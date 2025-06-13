'use client';

import { projects } from '@/data/projectsData';
import ProjectsHeader from '@/components/ProjectsHeader';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
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
  );
}
