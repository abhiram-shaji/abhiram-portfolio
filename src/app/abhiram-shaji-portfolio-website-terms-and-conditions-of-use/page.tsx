// app/abhiram-shaji-portfolio-website-terms-and-conditions-of-use/page.tsx

import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Terms and Conditions of Use | Abhiram Shaji Portfolio",
  description:
    "Read the terms and conditions governing the use of Abhiram Shaji's portfolio website. By using this site, you agree to comply with these terms.",
  alternates: {
    canonical: "https://www.worksofabhiram.com/abhiram-shaji-portfolio-website-terms-and-conditions-of-use",
  },
  openGraph: {
    title: "Terms and Conditions | Abhiram Shaji",
    description:
      "Understand the terms and conditions for browsing and sharing content on Abhiram Shaji's portfolio website.",
    url: "https://www.worksofabhiram.com/abhiram-shaji-portfolio-website-terms-and-conditions-of-use",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Abhiram Shaji Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | Abhiram Shaji Portfolio",
    description:
      "Please review the terms of using this site. Sharing is allowed, but reproduction or redistribution is not permitted.",
    images: ["/og-default.jpg"],
    creator: "@abhiramshaji",
  },
}

export default function TermsOfUsePage() {
  return (
    <main className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <Card className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms and Conditions of Use</CardTitle>
          <Separator className="my-4" />
        </CardHeader>
        <CardContent className="space-y-6 text-base leading-relaxed">
          <p>
            This website is provided solely for showcasing the work and projects of Abhiram Shaji. All content, code,
            and assets are for informational purposes only and may not be reused without permission.
          </p>
          <p>
            Visitors may browse and share links to this site, but copying, distributing, or modifying content without
            consent is prohibited.
          </p>
          <p>
            I reserve the right to update or remove any part of the site at any time without notice.
          </p>
          <p>By using this website, you agree to these terms of service.</p>
        </CardContent>
      </Card>
    </main>
  )
}
