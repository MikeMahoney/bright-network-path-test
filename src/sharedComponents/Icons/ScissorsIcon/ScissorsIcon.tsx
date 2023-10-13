import React from 'react'

interface IScissorsIcon {
  className?: string
}

export const ScissorsIcon: React.FC<IScissorsIcon> = ({ className = '' }) => {
  return (
    <svg
      width='22'
      height='19'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g stroke='#242424' strokeWidth='.5' fill='none' fillRule='evenodd'>
        <path
          strokeLinejoin='round'
          d='M21.222 10.524h-1.905m-.952 0H16.46m-.952 0h-1.905m-.952 0h-1.905m-.953 0H7.89'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9.793 9.571 4.08 6.714m15.857-2.219L9.794 9.571 4.079 12.43'
        />
        <path
          d='M4.08 18.143a2.857 2.857 0 1 0 0-5.714 2.857 2.857 0 0 0 0 5.714zm0-11.429A2.857 2.857 0 1 0 4.08 1a2.857 2.857 0 0 0 0 5.714z'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M9.794 9.571a.48.48 0 0 1 .21-.638l8.98-4.495a.946.946 0 0 1 1.276.429L10.422 9.79a.468.468 0 0 1-.628-.219z'
          strokeLinecap='round'
        />
      </g>
    </svg>
  )
}
