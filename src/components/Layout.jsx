import { NavLink, Outlet } from 'react-router-dom'

export default function Layout () {
  return (
    <>
      <div className='flex gap-4 pb-3'>
        <NavLink className={({ isActive }) => {
          return isActive ? 'bg-white p-2 rounded' : 'p-2'
        }} to='/'>Home</NavLink>
          <NavLink className={({ isActive }) => {
            return isActive ? 'bg-white p-2 rounded' : 'p-2'
          }} to='/likes'>Likes</NavLink>
      </div>
        <Outlet/>
    </>
  )
}
