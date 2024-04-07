import { Outlet } from 'react-router-dom'
import { FilterBookProvider } from '../context/bookfilter'
import NavBar from './NavBar'
import { BookLikeProvider } from '../context/bookLike'

export default function Layout () {
  
  return (
      <BookLikeProvider>
        <NavBar />
        <FilterBookProvider>
          <Outlet/>
        </FilterBookProvider>
      </BookLikeProvider>
  )
}
