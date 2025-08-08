// app/performance-case-study/page.tsx
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Gauge, ShieldCheck, Search, Sparkles } from "lucide-react"
import BookingModalTrigger from "@/components/ui/BookingModalTrigger"
import BookingModal from "@/components/ui/BookingModal"

export const metadata: Metadata = {
    metadataBase: new URL("https://www.worksofabhiram.com"),
    title: "Perfect 100 on PageSpeed Insights — Case Study and Why It Matters",
    description:
        "How I achieved a perfect 100 across Performance, Accessibility, Best Practices, and SEO in Google PageSpeed Insights, and what that means for business outcomes.",
    keywords: [
        "PageSpeed Insights",
        "Lighthouse",
        "Core Web Vitals",
        "Performance optimization",
        "Accessibility",
        "Best Practices",
        "SEO",
        "Next.js",
        "Shadcn",
        "TypeScript",
        "Frontend performance",
        "Web performance case study",
    ],
    authors: [{ name: "Abhiram Shaji", url: "https://www.worksofabhiram.com" }],
    creator: "Abhiram Shaji",
    publisher: "Abhiram Shaji",
    category: "Case Study",
    alternates: {
        canonical: "/performance-case-study",
    },
    openGraph: {
        type: "article",
        url: "https://www.worksofabhiram.com/performance-case-study",
        siteName: "Works of Abhiram",
        title: "Perfect 100 on PageSpeed Insights — Case Study and Why It Matters",
        description:
            "A practical breakdown of achieving perfect Lighthouse scores and turning them into business results.",
        images: [
            {
                url: "/website-performance-score-result.pg",
                width: 1600,
                height: 900,
                alt: "Google PageSpeed Insights report showing perfect 100 scores",
            },
        ],
        locale: "en_CA",
    },
    twitter: {
        card: "summary_large_image",
        site: "@",
        creator: "@",
        title: "Perfect 100 on PageSpeed Insights — Case Study and Why It Matters",
        description:
            "A practical breakdown of achieving perfect Lighthouse scores and turning them into business results.",
        images: ["/website-performance-score-result.pg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
        },
    },
}

const REPORT_URL =
    "https://pagespeed.web.dev/analysis/https-www-worksofabhiram-com/360iy01cyi?form_factor=desktop"

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline:
            "Perfect 100 on PageSpeed Insights — Case Study and Why It Matters",
        author: {
            "@type": "Person",
            name: "Abhiram Shaji",
            url: "https://www.worksofabhiram.com",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.worksofabhiram.com/performance-case-study",
        },
        image: ["https://www.worksofabhiram.com/website-performance-score-result.pg"],
        datePublished: "2025-08-07",
        dateModified: "2025-08-07",
        description:
            "How a perfect Lighthouse score translates into faster load times, stronger SEO, and better conversions.",
        articleSection: ["Performance", "Accessibility", "Best Practices", "SEO"],
    }

    return (
        <main className="container mx-auto max-w-4xl px-4 py-12">
            <Script
                id="jsonld-performance-case-study"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <header className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                    Case Study
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    Achieving a Perfect 100 100 in Google PageSpeed Insights
                </h1>
                <p className="text-muted-foreground text-lg">
                    Real world process. Real business impact. No fluff.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                    <Badge className="gap-1"><Gauge className="h-4 w-4" /> Performance 100</Badge>
                    <Badge className="gap-1"><ShieldCheck className="h-4 w-4" /> Accessibility 100</Badge>
                    <Badge className="gap-1"><Sparkles className="h-4 w-4" /> Best Practices 100</Badge>
                    <Badge className="gap-1"><Search className="h-4 w-4" /> SEO 100</Badge>
                </div>
                <div className="flex gap-3 pt-4">
                    <Button asChild variant="default" aria-label="View the full PageSpeed report">
                        <Link href={REPORT_URL} target="_blank" rel="noopener">
                            View the report
                        </Link>
                    </Button>
                    <BookingModalTrigger />
                </div>
            </header>

            <section className="mt-10">
                <Card>
                    <CardHeader>
                        <CardTitle>Report at a glance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border">
                            <Image
                                src="/website-performance-score-result.png"
                                alt="PageSpeed Insights report showing perfect 100 scores across all categories"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <p className="text-muted-foreground">
                            Captured on August 7, 2025. Desktop run with PageSpeed Insights 12.8.0.
                        </p>
                    </CardContent>
                </Card>
            </section>

            <Separator className="my-12" />

            <section className="grid gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Why this matters for employers and clients</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 text-base leading-7">
                        <p>
                            This is not luck. It comes from repeatable engineering decisions that prioritize real
                            user experience and measurable outcomes.
                        </p>
                        <ul className="grid gap-3">
                            <li className="flex gap-2">
                                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" />
                                <span>Measurable results. Faster loads, stronger rankings, better conversions.</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" />
                                <span>Future ready code. Clean, maintainable, and scalable delivery.</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" />
                                <span>Partnership mindset. Focus on long term growth and stability.</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>How I get there consistently</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div>
                            <h3 className="text-xl font-semibold">Performance engineering</h3>
                            <p className="text-muted-foreground">
                                Remove render blocking work. Optimize Core Web Vitals. Ship less JavaScript. Compress
                                and cache assets. Smart image strategy with modern formats and responsive sizing.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Accessibility</h3>
                            <p className="text-muted-foreground">
                                Semantic HTML. Clear focus states. WCAG aligned color contrast. Keyboard first
                                navigation. Labels and roles that assistive tech can trust.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Best practices</h3>
                            <p className="text-muted-foreground">
                                Strong CSP. HTTPS everywhere. Dependency hygiene. Dead code removal. No layout shift
                                surprises.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">SEO excellence</h3>
                            <p className="text-muted-foreground">
                                Structured data. Rich metadata. Clear information architecture. Intent aligned content
                                that search engines and users understand.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Interested in similar results</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-3">
                        <BookingModalTrigger />
                        <BookingModal />
                        <Button asChild variant="secondary">
                            <Link href="/abhiram-shaji-portfolio-projects-showcase" aria-label="See more work">
                                See more works
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href={REPORT_URL} target="_blank" rel="noopener" aria-label="Open PageSpeed report">
                                Open the report
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </section>

        </main>
    )
}
