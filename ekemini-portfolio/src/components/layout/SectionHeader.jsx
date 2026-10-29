import { FaDotCircle } from "react-icons/fa";

export function SectionHeader({ title, header, header2, description }) {
  return (
    <div className="space-y-4">
      <p className="text-xs md:text-sm text-text-secondary flex items-center uppercase gap-2 font-extralight tracking-[0.4em]">
        <FaDotCircle className="text-blue" />
        {title}
      </p>
      <div className="space-y-2 flex items-start flex-col gap-4 md:gap-8 md:flex-row md:items-end mt-6">
        <h2 className="text-3xl md:text-5xl font-bold text-text md:flex-1">
          {header} <span className="text-text-tertiary">{header2}</span>
        </h2>
        <p className="text-sm md:text-base text-text-secondary md:flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}
