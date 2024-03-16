import { FC } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { ImLink } from 'react-icons/im'
import { Link, NavLink } from 'react-router-dom'

import { Button } from '../ui/button'

export const Header: FC = () => {
  const navLinks = [
    {
      label: 'links',
      icon: ImLink,
      path: '/links'
    },
    {
      label: 'profile details',
      icon: FaRegUser,
      path: '/profile'
    }
  ]

  return (
    <header className='header'>
      <Link to='/' className='flex select-none items-center'>
        <Logo />
        <span className='text-2xl font-medium'>Linkees</span>
      </Link>
      <ul className='flex gap-4'>
        {navLinks.map(({ label, icon: Icon, path }) => (
          <li key={path}>
            <Button
              asChild
              variant='link'
              className='flex gap-2 text-gray-500 [&.active]:bg-violet-400/20 [&.active]:text-violet-600'
            >
              <NavLink to={path}>
                <Icon />
                <span>{label}</span>
              </NavLink>
            </Button>
          </li>
        ))}
      </ul>
      <Button variant='outline' asChild>
        <Link to='/preview'>preview</Link>
      </Button>
    </header>
  )
}

function Logo() {
  return (
    <svg
      className='h-7 w-7'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        d='M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961'
      />
    </svg>
  )
}
