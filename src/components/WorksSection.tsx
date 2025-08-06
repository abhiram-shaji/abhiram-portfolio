export const dynamic = 'force-static';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { worksData } from "@/data/worksData";
import { ArrowRight } from "lucide-react";

export default function WorksSection() {
    return (
        <section className="mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">
                Professional Works / Production Level Code
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
                {worksData.map((item, index) => (
                    <Card
                        key={index}
                        className="bg-muted/50 shadow-sm border flex flex-col"
                    >
                        <CardHeader className="flex items-center gap-4">
                            <Image
                                src={item.logo}
                                alt={item.alt}
                                width={48}
                                height={48}
                                className="rounded-md"
                            />
                            <div>
                                <CardTitle className="text-xl font-semibold">{item.company}</CardTitle>
                                <p className="text-sm text-muted-foreground">{item.role}</p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-1 justify-between space-y-3 text-sm leading-relaxed">
                            <div>{item.content}</div>
                            <div className="mt-auto">
                                <Button asChild variant="outline">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.linkText}
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {/* Final Call-to-Action Card */}
                <a
  href="/abhiram-shaji-portfolio-projects-showcase"
  className="flex flex-col h-full transition-all hover:scale-[1.02]"
>
  <Card className="bg-muted/50 text-foreground border flex flex-1 flex-col items-center justify-center text-center p-8 hover:bg-muted transition-colors shadow-sm hover:shadow-md">
    <ArrowRight className="w-16 h-16 md:w-24 md:h-24 mb-6 text-primary" />
    <CardTitle className="text-2xl font-semibold">
      Check Out My Projects
    </CardTitle>
  </Card>
</a>
            </div>
        </section>
    );
}
