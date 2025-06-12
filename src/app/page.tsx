'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Socials from '@/components/socials';

export default function Home() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center gap-10 px-4 py-10 md:pt-20">
      {/* Profile Image + Name + Subtitle */}
      <div className="flex flex-col sm:flex-row items-center md:gap-20">
        {/* Profile Image */}
        <div className="w-40 h-50 relative rounded-lg overflow-hidden border-4 border-muted shadow-lg group">
          <Image
            src="https://i.ibb.co/LdGpSJ52/bio-img.jpg"
            alt="Abhiram Shaji"
            fill
            className="object-cover transition duration-300 ease-in-out group-hover:grayscale"
          />
        </div>



        {/* Name + Subtitle */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight">Abhiram Shaji</h1>
          <h2 className="text-lg text-muted-foreground font-medium mt-2">
            Full Stack Developer • Designer • Creator
          </h2>
        </div>
      </div>


      {/* Core Paragraph */}
      <p className="max-w-3xl text-left sm:text-lg text-muted-foreground leading-relaxed">
        One of the very best developers in town if you could give me a chance to showcase it! What makes a good developer?
        Someone who does exactly what it requires to solve the problem in the best possible way. I research and create the most efficient back end,
        followed by the cleanest, not-cluttered, straight-to-the-point front end, fast, attention-grabbing, and conversion-focused.
        I ensure best-in-class SEO, integrate Google Analytics for valuable traffic data, and implement a CMS to simplify client workflows.
        I'm also certified in social media marketing and use tools like Ocoya, Hootsuite, and PredisAI to boost visibility and engagement.
      </p>

      {/* Impact Stats */}
      <div className="grid gap-4 sm:grid-cols-2 max-w-3xl w-full text-sm sm:text-base text-left text-muted-foreground">
        <p>A full website redesign can boost traffic by up to <strong>300%</strong> in just four months and lift conversion rates by as much as <strong>200%</strong>.</p>
        <p>Switching to a headless CMS saves time for <strong>58%</strong> of companies and increases ROI for <strong>61%</strong>.</p>
        <p><strong>80%</strong> of marketing automation users report an increase in lead generation through social media automation.</p>
        <p>Businesses that invest in social media marketing typically see <strong>24%</strong> revenue growth on average compared to those that don’t.</p>
      </div>

      <Socials />


    </section>
  )
}
