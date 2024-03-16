import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { LinksContext } from '@/contexts/LinksContext'
import { LinksContextValue } from '@/types/contexts'

import { Header } from './Header'
import { MobilePreview } from './MobilePreview'

export const Layout = () => {
  const { links } = useContext(LinksContext) as LinksContextValue

  return (
    <div className='flex h-full max-h-dvh flex-col gap-4 bg-gray-200 p-4 text-black'>
      <Header />
      <div className='flex flex-auto gap-4'>
        <div className='flex basis-1/3 items-center justify-center rounded-md bg-white p-4'>
          <MobilePreview links={links} />
        </div>
        <div className='flex basis-2/3 flex-col rounded-md bg-white p-8'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
