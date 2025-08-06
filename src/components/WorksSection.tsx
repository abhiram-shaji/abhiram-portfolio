import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function WorksSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">
        Professional Works / Production Level Code
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* The Digital Uplift */}
        <Card className="bg-muted/50 shadow-sm border">
          <CardHeader className="flex items-center gap-4">
            <Image
              src="/digital-uplift-logo.png"
              alt="The Digital Uplift logo"
              width={48}
              height={48}
              className="rounded-md"
            />
            <div>
              <CardTitle className="text-xl font-semibold">The Digital Uplift</CardTitle>
              <p className="text-sm text-muted-foreground">Founder / Full Stack Developer</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Started as the project 100 to help as many small businesses in British Columbia as
              possible establish a digital presence. I focus on streamlined development, skipping
              the agencies and middlemen.
            </p>
            <p>
              The stack includes Next.js, Shadcn for UI, SEO best practices, Google Analytics, and
              targeted Google Ads campaigns. A CMS and modular microservices ensure businesses
              survive and thrive in the digital age.
            </p>
            <a
              href="https://www.thedigitaluplift.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Visit Website
            </a>
          </CardContent>
        </Card>

        {/* Deloitte */}
        <Card className="bg-muted/50 shadow-sm border">
          <CardHeader className="flex items-center gap-4">
            <Image
              src="/deloitte.jpg"
              alt="Deloitte logo"
              width={48}
              height={48}
              className="rounded-md"
            />
            <div>
              <CardTitle className="text-xl font-semibold">Deloitte</CardTitle>
              <p className="text-sm text-muted-foreground">Associate Analyst</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed">
            <p>
              I researched and created the most efficient back end, followed by the cleanest,
              not-cluttered, straight-to-the-point front end — fast, attention-grabbing, and
              conversion-focused.
            </p>
            <p>
              I ensured best-in-class SEO, integrated Google Analytics for valuable traffic data,
              and implemented a CMS to simplify client workflows.
            </p>
            <p>
              I&apos;m also certified in social media marketing and used tools like Ocoya,
              Hootsuite, and PredisAI to boost visibility and engagement.
            </p>
            <a
              href="https://www.linkedin.com/in/abhiram-kace/overlay/experience/2104080602/multiple-media-viewer/?profileId=ACoAACpIMvYBC8bbLb3t8Zx91NyKXw1kfG7t2k4&treasuryMediaId=1635513936154"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View Experience Letter (LinkedIn login required)
            </a>
          </CardContent>
        </Card>

        {/* Langroove */}
        <Card className="bg-muted/50 shadow-sm border">
          <CardHeader className="flex items-center gap-4">
            <Image
              src="/langroove.png"
              alt="Langroove logo"
              width={48}
              height={48}
              className="rounded-md"
            />
            <div>
              <CardTitle className="text-xl font-semibold">Langroove</CardTitle>
              <p className="text-sm text-muted-foreground">Mobile Application Developer</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Langroove is a social language learning app that helps users practice languages in
              real-time through interactive text conversations with built-in translation support.
            </p>
            <p>
              Built using React Native (Expo) and Firebase, it integrates third-party APIs for
              translations and offers a modern, accessible UI for all levels.
            </p>
            <a
              href="https://learndigital.dev/students/abhiram-shaji/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View Case Study
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
