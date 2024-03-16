import { IconType } from 'react-icons'

export type PlatformValue = 'github' | 'youtube' | 'twitter'

export type Platforms = {
  [key in PlatformValue]: {
    label: string
    domain: string
    icon: IconType
    color: string
  }
}

export type Link = { platform: PlatformValue; path: string; id: string }
