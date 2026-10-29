import { MarqueueContent } from './MarqueueContent';

export function Marqueue() {
  const skills = [
    'Full-Stack Development',
    'Backend Architecture',
    'API Engineering',
    'Database Design',
    'AI Integration',
  ];

  return (
    <div className='mt-12 overflow-hidden border border-line'>
      <div className='marquee-track flex w-max'>
        {[...skills, ...skills].map((skill, index) => (
          <MarqueueContent key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}