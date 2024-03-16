import { FC } from 'react'

import { Link } from '@/types'

import { LinkItems } from './LinkItems'
import { OutlinePhone } from './OutlinePhone'
import { ProfileView } from './ProfileView'

interface MobilePreviewProps {
  profile?: {
    imageURL: string
    name: string
    description?: string
  }
  links: Link[]
}

export const MobilePreview: FC<MobilePreviewProps> = ({ profile, links }) => {
  return (
    <OutlinePhone>
      <ProfileView data={profile} />
      <LinkItems links={links} />
    </OutlinePhone>
  )
}
