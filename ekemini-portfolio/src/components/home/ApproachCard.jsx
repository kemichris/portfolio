export function ApproachCard({ num, title, description }) {
  return (
    <article className='flex min-h-56 flex-col justify-center p-7 md:p-9 border border-line'>

      <span className='mb-9 font-mono text-[10px] text-blue-bright'>
        {num}
      </span>

      <h3 className='mb-4 text-xl font-medium tracking-tight text-text'>
        {title}
      </h3>

      <p className='max-w-md text-sm leading-relaxed text-muted'>
        {description}
      </p>

    </article>
  );
}