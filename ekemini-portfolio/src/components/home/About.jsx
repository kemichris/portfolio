import {SectionHeader} from "../layout/SectionHeader"

export function About() {
    const principles = [
        {
            id: "01",
            principle: "Build with intention"
        },
        {
            id: "02",
            principle: "Design for scale"
        },
        {
            id: "03",
            principle: "Write maintainable code"
        },
        {
            id: "04",
            principle: "Solve the actual problem"
        },
    ]
  return (
    <section className="mt-20 pb-8" id="about">
      <SectionHeader
        title="Identity"
        header="I don't just build interfaces."
        header2="I build the systems that make them work."
        description="I care about the decisions users notice and the architecture they never have to. 
        That means clean boundaries, efficient databases, secure flows, responsive interfaces, 
        and code another engineer can confidently extend."
      />

      <div className=" flex flex-col md:flex-row md:border-y border-line [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-line mt-12">
        <div className="flex-1 border-line border-y border-r  py-4">
            <p className="uppercase text-text-secondary">Engineering Principles</p>
        </div>
        {
            principles.map((principle, index) => (
                <div key={index} className="py-4 px-2  md:border-line md:border-r flex-1">
                    <p className="text-text-secondary">{principle.id}</p>
                    <p className="text-text">{principle.principle}</p>
                </div>
            ))
        }
      </div>
    </section>
  )

}