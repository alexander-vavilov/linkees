import { Navigate, Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { Links } from '@/pages/Links'
import { Profile } from '@/pages/Profile'

import { Preview } from './pages/Preview'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='links' />} />
      <Route element={<Layout />}>
        <Route path='/links' element={<Links />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route path='/preview' element={<Preview />} />
    </Routes>
  )
}
