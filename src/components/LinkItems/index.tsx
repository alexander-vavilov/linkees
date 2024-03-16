import { FC } from 'react'

import { platforms } from '@/constants'
import { Link } from '@/types'

import { LinkItem } from './LinkItem'

export const LinkItems: FC<{ links: Link[] }> = ({ links }) => {
  const items = links.map(({ platform, path }) => ({
    path,
    label: platforms[platform].label,
    icon: platforms[platform].icon,
    color: platforms[platform].color
  }))

  return (
    <ul className='flex flex-col gap-4'>
      {items.map(({ path, label, icon, color }) => (
        <li key={path}>
          <LinkItem path={path} icon={icon} color={color}>
            {label}
          </LinkItem>
        </li>
      ))}
    </ul>
  )
}
