export const dynamic = 'force-static';

import {
  Github,
  GitBranch,
  Linkedin,
  Mail,
  Camera,
  Instagram,
  GraduationCap,
} from 'lucide-react';

const socials = {
  github: 'https://github.com/abhiram-shaji',
  gist: 'https://gist.github.com/abhiram-shaji',
  pexels: 'https://www.pexels.com/@abhiram-kace-498261259/',
  instagram: 'https://instagram.com/breifkace',
  linkedin: 'https://linkedin.com/in/abhiram-kace',
  email: 'write4kace@gmail.com',
  learn: 'https://learndigital.dev/students/abhiram-shaji/',
};

export default function Socials() {
  return (
    <div className="w-full flex justify-center md:justify-start mt-4 gap-6">
      <a href={socials.github} target="_blank" rel="noreferrer">
        <Github className="w-6 h-6 text-neutral-600 hover:text-[#6e5494] transition-colors duration-200" />
      </a>
      <a href={socials.gist} target="_blank" rel="noreferrer">
        <GitBranch className="w-6 h-6 text-neutral-600 hover:text-[#6e5494] transition-colors duration-200" />
      </a>
      <a href={socials.linkedin} target="_blank" rel="noreferrer">
        <Linkedin className="w-6 h-6 text-neutral-600 hover:text-[#0a66c2] transition-colors duration-200" />
      </a>
      <a href={`mailto:${socials.email}`} target="_blank" rel="noreferrer">
        <Mail className="w-6 h-6 text-neutral-600 hover:text-[#c24040] transition-colors duration-200" />
      </a>
      <a href={socials.pexels} target="_blank" rel="noreferrer">
        <Camera className="w-6 h-6 text-neutral-600 hover:text-[#138a72] transition-colors duration-200" />
      </a>
      <a href={socials.instagram} target="_blank" rel="noreferrer">
        <Instagram className="w-6 h-6 text-neutral-600 hover:text-[#e1306c] transition-colors duration-200" />
      </a>
      <a href={socials.learn} target="_blank" rel="noreferrer">
        <GraduationCap className="w-6 h-6 text-neutral-600 hover:text-[#4c51bf] transition-colors duration-200" />
      </a>
    </div>
  );
}
