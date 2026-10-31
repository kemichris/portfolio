import { SectionHeader } from "../layout/SectionHeader";
import { ApproachStep } from "./ApproachStep";
import { ApproachCard } from "./ApproachCard";

const architectureLayers = [
  { num: "01", title: "Client" },
  { num: "02", title: "API Layer" },
  { num: "03", title: "Authentication" },
  { num: "04", title: "Business Logic" },
  { num: "05", title: "Database" },
  { num: "06", title: "External Services" },
];

const engineeringPrinciples = [
  {
    num: "01",
    title: "Contracts",
    description:
      "Design predictable APIs with clear inputs, outputs, and failure states.",
  },
  {
    num: "02",
    title: "Separation",
    description:
      "Keep controllers, services, and data access focused on one responsibility.",
  },
  {
    num: "03",
    title: "Data",
    description:
      "Model relational and document databases around real access patterns.",
  },
  {
    num: "04",
    title: "Security",
    description:
      "Validate at every boundary and implement intentional authentication flows.",
  },
  {
    num: "05",
    title: "Resilience",
    description:
      "Handle errors consistently, log useful context, and avoid silent failures.",
  },
  {
    num: "06",
    title: "Integration",
    description:
      "Connect external APIs and AI tools behind stable internal interfaces.",
  },
];

export function Approach() {
  return (
    <section className="mt-16 px-8 md:px-20">
      <SectionHeader
        title="Engineering approach"
        header="Good software is built"
        header2="beneath the surface."
        description="Clear separation of concerns keeps systems secure, testable, and ready to evolve."
      />

      <div className="mt-24 overflow-hidden rounded-[22px] border border-line bg-surface">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-4 md:p-10">
          {architectureLayers.map((layer) => (
            <ApproachStep key={layer.num} {...layer} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3">
          {engineeringPrinciples.map((principle) => (
            <ApproachCard key={principle.num} {...principle} />
          ))}
        </div>
      </div>
    </section>
  );
}
