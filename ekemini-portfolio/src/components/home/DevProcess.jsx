import { SectionHeader } from "../layout/SectionHeader";

const processes = [
  { num: "01", title: "Understand the problem." },
  { num: "02", title: "Design the architecture." },
  { num: "03", title: "Build the experience." },
  { num: "04", title: "Integrate and validate." },
  { num: "05", title: "Deploy and improve." },
];

export function DevProcess() {
  return (
    <section className="mt-16 py-20 px-8 md:px-20 border-y border-line bg-surface">
      <SectionHeader title="Development Process" />

      <div className="border-x border-line grid md:grid-cols-5 mt-6">
        {processes.map((process, index) => (
          <div
            key={process.num}
            className={`border-line md:border-r md:border-t-0 ${
              index !== 0 ? "border-t" : ""
            }`}
          >
            <div className="px-4 md:border-b border-line">
              <span className="text-blue-bright text-xs">{process.num}</span>
            </div>

            <div className="px-4 pt-8 pb-4">
              <p className="text-text text-sm">{process.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
