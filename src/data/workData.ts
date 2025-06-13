export interface WorkItem {
  company: string;
  role: string;
  logo: string;
  onMoreInfo: () => void;
}

export const works: WorkItem[] = [
    {
    company: 'Figs Deli, Victoria BC',
    role: 'Contract Web Developer',
    logo: '/fig.png',
    onMoreInfo: () =>
      alert(
        `Built and maintained the official website and digital presence for Figs Deli.\n\nResponsibilities:\n• Developed responsive layouts and optimized loading speed\n• Maintained site updates and SEO adjustments\n\nTech Used: HTML5, CSS3, JavaScript, Next.js`
      ),
  },
  {
    company: 'Langroove',
    role: 'Founder (Currently in closed testing)',
    logo: '/langroove.png',
    onMoreInfo: () =>
      alert(
        `Founder of Langroove, a social language learning platform with real-time messaging and translation features.\n\nStatus: Currently in closed testing phase.\n\nTech Used: React Native, Firebase, Google Translate API, Expo`
      ),
  },
  {
    company: 'Deloitte USI Consulting',
    role: 'Software Engineer',
    logo: '/deloitte.jpg',
    onMoreInfo: () =>
      alert(
        `Developed internal dashboards and tooling using .NET, JavaScript, SQL, and modern front-end tech.\n\nResponsibilities:\n• Gathered requirements, participated in Agile ceremonies\n• Wrote production-ready code and handled deployments\n• Optimized front-end performance and contributed to scalable architecture\n\nTech Used: .NET, JavaScript, SQL, HTML5, CSS3, Git, JIRA, Confluence, Agile`
      ),
  }
];
