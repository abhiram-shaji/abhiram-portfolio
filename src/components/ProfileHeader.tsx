export const dynamic = 'force-static'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, GaugeCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProfileHeader() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {/* Profile Image */}
      <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-muted shadow-lg group">
        <Image
          src="/profile-img.jpg"
          alt="Abhiram Shaji"
          fill
          className="object-cover transition duration-300 ease-in-out group-hover:grayscale"
          priority
        />
      </div>

      {/* Name + Subtitle + Details */}
      <div className="text-center sm:text-left">
        <h1 className="text-4xl font-bold tracking-tight">Abhiram Shaji</h1>
        <h2 className="text-lg text-muted-foreground font-medium mt-2">
          Full Stack Developer • Designer • Creator <br />
          Exploring employment opportunities
        </h2>

        

        {/* Location */}
        <div className="flex items-center justify-center sm:justify-start mt-3 text-muted-foreground text-sm gap-2">
          <MapPin className="w-4 h-4" strokeWidth={2} />
          <span>Victoria, BC, Canada</span>
        </div>

        {/* Education */}
        <div className="flex items-start gap-2 mt-2 text-muted-foreground text-sm">
          <div className="leading-relaxed">
            <p>Bachelor&apos;s in Computer Science</p>
            <p>Post Graduate Diploma in Digital Design + Development</p>
          </div>
        </div>

        {/* Performance pill CTA */}
        <div className="mt-3">
          <Button asChild variant="secondary" size="sm" aria-label="See the 100/100 PageSpeed case study">
            <Link href="/achieving-perfect-100-google-pagespeed-insights-performance-accessibility-seo" className="inline-flex items-center">
              <GaugeCircle className="w-4 h-4 mr-2" />
              Perfect 100 PageSpeed case study
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
