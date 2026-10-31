import { FaCode } from 'react-icons/fa6';

export function ApproachStep({ num, title }) {
  return (
    <div className='relative flex h-36 min-w-0 flex-1 flex-col items-center justify-center rounded-xl border border-line bg-bg-2 px-3 transition-colors duration-300 hover:border-blue-bright/40'>

      <span className='absolute left-3 top-3 font-mono text-[9px] text-muted'>
        {num}
      </span>

      <FaCode
        size={20}
        className='mb-4 text-blue-bright'
      />

      <h3 className='font-mono text-xs text-text text-center'>
        {title}
      </h3>

    </div>
  );
}