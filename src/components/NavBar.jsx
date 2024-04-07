import { NavLink } from "react-router-dom"
import { useLike } from "../hook/useLike"

export default function NavBar () {
    const { likes } = useLike()

    return (
    <div className='flex gap-4 pb-3'>
        <NavLink className={({ isActive }) => {
          return isActive ? 'bg-white p-2 rounded' : 'p-2'
        }} to='/'>Home</NavLink>
          <NavLink className={({ isActive }) => {
            return isActive ? 'bg-white p-2 rounded' : 'p-2'
          }} to='/likes'>Likes {likes.length}</NavLink>
      </div>
    )
}