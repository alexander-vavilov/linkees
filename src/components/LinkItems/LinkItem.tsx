import { FC, ReactNode } from 'react'
import { IconType } from 'react-icons'
import { GoArrowRight } from 'react-icons/go'

interface LinkItemProps {
  children: ReactNode
  path: string
  icon: IconType
  color: string
}

export const LinkItem: FC<LinkItemProps> = ({
  children,
  path,
  icon: Icon,
  color
}) => {
  return (
    <a
      href={path}
      target='_blank'
      className='flex items-center justify-between gap-4 rounded-lg px-4 py-2.5 text-white'
      style={{ background: color }}
    >
      <div className='flex items-center gap-2'>
        <Icon />
        <span className='text-sm'>{children}</span>
      </div>
      <GoArrowRight size={20} />
    </a>
  )
}
