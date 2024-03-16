import { FC } from 'react'

import { Skeleton } from './ui/skeleton'

interface ProfileViewProps {
  data?: {
    imageURL: string
    name: string
    description?: string
  }
}

export const ProfileView: FC<ProfileViewProps> = ({ data = null }) => {
  return (
    <div className='flex w-full flex-col items-center gap-3 pb-8'>
      {data ? (
        <div className='flex items-center gap-2'>
          <img
            src={data.imageURL}
            className='mb-2 h-24 w-24 rounded-full'
            alt={data.name}
          />
          <span className='text-lg font-medium'>{data.name}</span>
        </div>
      ) : (
        <>
          <Skeleton className='mb-2 h-24 w-24 rounded-full' />
          <Skeleton className='h-4 w-40' />
          <Skeleton className='h-2 w-24' />
        </>
      )}
    </div>
  )
}
