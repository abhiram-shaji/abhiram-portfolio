import BookingModalTrigger from "@/components/ui/BookingModalTrigger";
import BookingModal from "@/components/ui/BookingModal";
import {
  Code,
  ShoppingCart,
  BarChart,
  Boxes,
  Gavel,
  BadgeCheck,
  Database,
  Users,
} from "lucide-react";

export default function ProfileIntro() {
  return (
    <>
      {/* Core Paragraph */}
      <p className="text-left sm:text-lg text-muted-foreground leading-relaxed">
        What makes a good developer?
        Someone who does exactly what it requires to solve the problem in the best possible way. Research goes into creating the most efficient back end, followed by the cleanest, uncluttered, straight to the point front end that is fast, attention grabbing, and conversion focused.

      </p>

      
{/* Expertise Snapshot */}
<div className="grid gap-6 sm:grid-cols-2 w-full text-sm sm:text-base text-left text-muted-foreground">
  <div className="flex items-start gap-4">
    <Code className="w-12 h-12 text-primary" />
    <div>
      I build scalable React apps using modern UI frameworks like <strong>ShadCN</strong> and <strong>Aceternity</strong>, integrated with tools like <strong>Google Analytics</strong> for performance tracking and user behavior insights.
    </div>
  </div>

  <div className="flex items-start gap-4">
    <ShoppingCart className="w-12 h-12 text-primary" />
    <div>
      Developed custom <strong>eCommerce platforms</strong> integrated with CRMs like <strong>Salesforce</strong>, ensuring end-to-end testing, performance optimization, and seamless user experience.
    </div>
  </div>

  <div className="flex items-start gap-4">
    <BarChart className="w-12 h-12 text-primary" />
    <div>
      Built data-driven <strong>analytics dashboards</strong> using <strong>Redis, Node.js, and Express</strong>, providing real-time insights and robust backend infrastructure.
    </div>
  </div>

  <div className="flex items-start gap-4">
    <Boxes className="w-12 h-12 text-primary" />
    <div>
      Designed and deployed <strong>microservices architectures</strong> with <strong>containerization</strong> via Docker and Kubernetes for scalable, efficient delivery.
    </div>
  </div>

  <div className="flex items-start gap-4">
    <Gavel className="w-12 h-12 text-primary" />
    <div>
      Engineered a <strong>bidding system</strong> leveraging <strong>Redis, GraphQL</strong>, and pub/sub patterns to ensure high-performance, low-latency interactions.
    </div>
  </div>

  <div className="flex items-start gap-4">
    <BadgeCheck className="w-12 h-12 text-primary" />
    <div>
      Expert in <strong>JavaScript, TypeScript, Node.js</strong>, with deep experience in <strong>Angular</strong> and modern web frameworks.
    </div>
  </div>

  <div className="flex items-start gap-4">
    <Database className="w-12 h-12 text-primary" />
    <div>
      Skilled in <strong>API design</strong> (RESTful), advanced <strong>database optimization</strong> (MySQL, NoSQL), and version control with <strong>Git</strong>.
    </div>
  </div>

  <div className="flex items-start gap-4">
    <Users className="w-12 h-12 text-primary" />
    <div>
      Proven ability in <strong>project leadership</strong>, mentoring junior devs, and thriving in fast-paced, deadline-driven environments with minimal supervision.
    </div>
  </div>
</div>

      {/* Booking Modal Trigger */}
      <div className="mt-6">
        <BookingModalTrigger />
      </div>

      {/* Booking Modal */}
      <BookingModal />
    </>
  );
}
