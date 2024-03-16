import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Platforms } from './types'

export const platforms: Platforms = {
  github: {
    label: 'GitHub',
    domain: 'https://github.com',
    icon: FaGithub,
    color: '#000'
  },
  youtube: {
    label: 'YouTube',
    domain: 'https://youtube.com',
    icon: FaYoutube,
    color: '#ea1717'
  },
  twitter: {
    label: 'Twitter',
    domain: 'https://twitter.com',
    icon: FaTwitter,
    color: '#000'
  }
}
