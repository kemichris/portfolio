import { SectionHeader } from "../layout/SectionHeader";
import { SkillCard } from "./SkillCard";
import { StaggerContainer, StaggerItem } from "../common/StaggerContainer";

export function Skills() {
  const skills = [
    {
      num: "01",
      stack: "Frontend",
      toolkits: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      num: "02",
      stack: "Backend",
      toolkits: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Auth & Authorization",
        "Service Architecture",
      ],
    },
    {
      num: "03",
      stack: "Databases & ORM",
      toolkits: ["MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose"],
    },
    {
      num: "04",
      stack: "AI & Integrations",
      toolkits: [
        "OpenAI API",
        "AI Agents",
        "Tool Calling",
        "Email APIs",
        "Cloudinary",
      ],
    },
    {
      num: "05",
      stack: "Tools & Deployment",
      toolkits: ["Git & GitHub", "Vercel", "Render", "Neon", "Postman"],
    },
  ];

  return (
    <section className="mt-16 ">
      <SectionHeader
        title="Technical Toolkit"
        header="Built across the"
        header2="entire stack."
        description="Every technology choice serves a purpose: clean architecture, maintainable systems, and practical results."
      />
      <StaggerContainer className='grid grid-cols-1 gap-6 md:grid-cols-6 mt-12'>
        {skills.map((skill, index) => (
             <StaggerItem key={skill.num} className={index >= 3 ? 'md:col-span-3' : 'md:col-span-2' }>
                <SkillCard {...skill} />
             </StaggerItem>
          
        ))}
      </StaggerContainer>
    </section>
  );
}
