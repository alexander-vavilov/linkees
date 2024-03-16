import { nanoid } from 'nanoid'
import { createContext, FC, ReactNode, useState } from 'react'

import { Link } from '@/types'
import { LinksContextValue } from '@/types/contexts'

export const LinksContext = createContext<LinksContextValue | null>(null)

export const LinksContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [links, setLinks] = useState<Link[]>([
    {
      platform: 'github',
      path: 'https://github.com',
      id: nanoid()
    }
  ])

  const addNew = () => {
    // setLinks((links) => [...links, { platform: null, path: '', id: nanoid() }])
    console.log('new')
  }

  const remove = (id: string) => {
    setLinks((links) => links.filter((link) => link.id !== id))
  }

  return (
    <LinksContext.Provider value={{ links, addNew, remove }}>
      {children}
    </LinksContext.Provider>
  )
}
