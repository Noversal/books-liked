import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FilterBookProvider } from './context/bookfilter'
import { BookLikeProvider } from './context/bookLike'
import AllBooks from './pages/AllBooks'
import BooksLiked from './pages/BooksLiked'
import Layout from './components/Layout'

function App () {
  return (
<BrowserRouter>
      <Routes>
        <Route path='/' element={<BookLikeProvider><Layout/></BookLikeProvider>}>
          <Route index element={<BookLikeProvider><FilterBookProvider><AllBooks /></FilterBookProvider></BookLikeProvider>} />
          <Route path='/likes' element={<BookLikeProvider><BooksLiked/></BookLikeProvider>} />
        </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App
