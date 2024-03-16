import { FC, useContext } from 'react'

import { LinkCard } from '@/components/LinkCard'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { LinksContext } from '@/contexts/LinksContext'
import { LinksContextValue } from '@/types/contexts'

export const Links: FC = () => {
  const { links, addNew, remove } = useContext(
    LinksContext
  ) as LinksContextValue

  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold text-gray-700'>
          Customize your links
        </h1>
        <p className='my-2 text-gray-500'>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <Button
          variant='outline'
          onClick={addNew}
          className='my-4 w-full normal-case'
        >
          <span>Add new link</span>
        </Button>
      </div>
      <div className='flex max-h-full flex-auto flex-col gap-4 overflow-y-auto'>
        {links.map(({ platform, path, id }) => (
          <LinkCard
            key={id}
            handleRemove={() => remove(id)}
            platform={platform}
            path={path}
          />
        ))}
      </div>
      <Separator />
      <div className='flex justify-end pt-8'>
        <Button>save</Button>
      </div>
    </>
  )
}
