import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'

import { LinkItems } from '@/components/LinkItems'
import { ProfileView } from '@/components/ProfileView'
import { Button } from '@/components/ui/button'
import { LinksContext } from '@/contexts/LinksContext'
import { LinksContextValue } from '@/types/contexts'

export const Preview: FC = () => {
  const { links } = useContext(LinksContext) as LinksContextValue

  return (
    <div className='flex h-full flex-col p-4'>
      <header className='header'>
        <Button asChild variant='outline'>
          <Link to='/links'>Back to Editor</Link>
        </Button>
        <Button>Share Link</Button>
      </header>
      <div className='mt-[14vh] flex items-center justify-center'>
        <div className='flex min-w-[280px] flex-col gap-6 rounded-md bg-white p-8 shadow-xl'>
          <ProfileView />
          <LinkItems links={links} />
        </div>
      </div>
      <div className='fixed left-0 top-0 -z-10 h-1/3 w-full rounded-b-[32px] bg-violet-700' />
    </div>
  )
}
