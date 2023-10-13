import React from 'react'

interface IClipboardIcon {
  className?: string
}

export const ClipboardIcon: React.FC<IClipboardIcon> = ({ className = '' }) => {
  return (
    <svg
      width='18'
      height='22'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g
        stroke='#242424'
        strokeWidth='.5'
        fill='none'
        fillRule='evenodd'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M5.222 3v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V3h3c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1h-14c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3z' />
        <path d='M12.222 5h-6c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1zm-3 12h.01m-2.01-5.96c.04-.29.16-.83.56-1.31.1-.13.29-.36.62-.53.4-.2.76-.2.92-.2.18 0 .61.02 1.05.31.54.36.71.88.76 1.04.03.08.19.61 0 1.21-.11.38-.31.62-.48.83-.7.83-1.32.76-1.43 1.3-.01.02 0 .13 0 .31' />
      </g>
    </svg>
  )
}
