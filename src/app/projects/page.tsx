'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projectsData';

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-4 py-16 md:py-24 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          I've worked on a variety of projects over the years and I'm proud of the progress I've made.
          Many of these projects are open-source and available for others to explore and contribute to.
          If you're interested in any of the projects I've worked on, please feel free to check out the code
          and suggest any improvements or enhancements you might have in mind.
          Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative h-72 rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Full background image */}
            <Image
              src={project.logo}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-white p-4 z-10">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm mb-3">{project.description}</p>
              <div className="flex gap-3 flex-wrap">
                <Link href={project.link} target="_blank" rel="noreferrer">
                  <Button variant="secondary" size="sm">
                    {project.linkText}
                  </Button>
                </Link>
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noreferrer">
                    <Button variant="ghost" size="sm">
                      GitHub
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
