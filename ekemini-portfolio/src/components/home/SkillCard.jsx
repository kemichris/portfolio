import { FaCode } from 'react-icons/fa6';

export function SkillCard({num, stack, toolkits}) {
    return (
        <div className='p-4 rounded border border-line hover:border-blue-bright bg-surface-2 transform transition-all duration-1000'>
            <div className='flex items-center justify-between mb-8'>
                <p className='text-sm text-text-secondary'>{num}</p>
                <FaCode size={15} className='text-blue'/>
            </div>
            <h3 className='text-white text-xl mb-4'>{stack}</h3>
            <div className='flex flex-wrap gap-2'>
                {
                    toolkits.map((toolkit, index) => (
                        <div key={index} className='p-2 rounded text-sm text-muted border border-line'>
                            {toolkit}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}