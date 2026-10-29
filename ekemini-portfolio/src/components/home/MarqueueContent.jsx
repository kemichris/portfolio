import { FaCode } from 'react-icons/fa6';

export function MarqueueContent({ skill }) {
  return (
    <div className='flex shrink-0 items-center gap-2 border-r border-line px-6 py-4 text-sm text-text-secondary'>
      <FaCode size={20} />
      <span className='whitespace-nowrap'>{skill}</span>
    </div>
  );
}