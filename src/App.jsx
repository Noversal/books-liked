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
          <Route index element={<FilterBookProvider><AllBooks /></FilterBookProvider>} />
          <Route path='/likes' element={<BooksLiked/>} />
        </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App
