import { FC, ReactNode } from 'react'

export const OutlinePhone: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='h-full max-h-[600px] min-h-[500px] w-72 rounded-[42px] border-2 border-gray-400'>
      <div className='h-full w-full p-2'>
        <div className='h-full w-full rounded-[34px] border-2 border-gray-400'>
          <div className='flex w-full justify-center'>
            <div className='-mt-0.5 h-5 w-24 rounded-b-xl border-2 border-t-0 border-gray-400 bg-white' />
          </div>
          <div className='p-6'>{children}</div>
        </div>
      </div>
    </div>
  )
}
