// app/abhiram-shaji-portfolio-website-privacy-policy-and-data-protection/page.tsx

import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Privacy Policy and Data Protection | Abhiram Shaji Portfolio",
  description:
    "Review how your data is handled on Abhiram Shaji's portfolio site. No personal data is collected automatically. Learn more about privacy and third-party tools.",
  alternates: {
    canonical: "https://www.worksofabhiram.com/abhiram-shaji-portfolio-website-privacy-policy-and-data-protection",
  },
  openGraph: {
    title: "Privacy Policy | Abhiram Shaji Portfolio",
    description:
      "We respect your privacy. No automatic data collection. Data shared via forms or emails is only used to respond and never shared.",
    url: "https://www.worksofabhiram.com/abhiram-shaji-portfolio-website-privacy-policy-and-data-protection",
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
    title: "Privacy Policy | Abhiram Shaji Portfolio",
    description:
      "Your data is safe. We only use your info to respond and never share it. View full privacy and data protection policy.",
    images: ["/og-default.jpg"],
    creator: "@abhiramshaji",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <Card className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy & Data Protection</CardTitle>
          <Separator className="my-4" />
        </CardHeader>
        <CardContent className="space-y-6 text-base leading-relaxed">
          <p>
            We respect your privacy and are committed to protecting any personal information you share through this
            website.
          </p>
          <p>
            This portfolio does not collect personal data automatically. If you contact me through a form or email, your
            information will only be used to respond and will never be shared with third parties.
          </p>
          <p>
            Third-party services like GitHub or analytics tools may collect anonymized data such as browser type or page
            visits. You can manage such data through your browser settings.
          </p>
          <p>By using this website, you consent to this privacy policy.</p>
        </CardContent>
      </Card>
    </main>
  )
}
