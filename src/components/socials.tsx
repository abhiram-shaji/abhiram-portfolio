'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const socials = {
  github: 'https://github.com/abhiram-shaji',
  instagram: 'https://instagram.com/yourhandle',
  linkedin: 'https://linkedin.com/in/abhiram-kace',
  email: 'write4kace@gmail.com',
};

export default function Socials() {
  return (
    <div className="text-left">
      <div className="flex gap-6 mt-4">
        <a href={socials.github} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="grayscale hover:grayscale-0 transition-all duration-200"
          />
        </a>
        <a href={socials.instagram} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="grayscale hover:grayscale-0 transition-all duration-200"
          />
        </a>
        <a href={socials.linkedin} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="grayscale hover:grayscale-0 transition-all duration-200"
          />
        </a>
        <a href={`mailto:${socials.email}`} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="grayscale hover:grayscale-0 transition-all duration-200"
          />
        </a>
      </div>
    </div>
  );
}
