'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projectsData'; // <- Importing the data

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-4 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          I've worked on a variety of projects over the years and I'm proud of
          the progress I've made. Many of these projects are open-source and
          available for others to explore and contribute to. If you're
          interested in any of the projects I've worked on, please feel free to
          check out the code and suggest any improvements or enhancements you
          might have in mind. Collaborating with others is a great way to learn
          and grow, and I'm always open to new ideas and feedback.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-card border rounded-xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col"
          >
            <Image
              src={project.logo}
              alt={project.title}
              width={800}
              height={400}
              className="h-48 w-full object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-muted-foreground text-sm flex-1">
                {project.description}
              </p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <Link href={project.link} target="_blank" rel="noreferrer">
                  <Button variant="outline">{project.linkText}</Button>
                </Link>
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="ghost">GitHub</Button>
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
