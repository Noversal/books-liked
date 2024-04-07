import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllBooks from './pages/AllBooks'
import BooksLiked from './pages/BooksLiked'
import Layout from './components/Layout'

function App () {
  return (
<BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<AllBooks />} />
          <Route path='/likes' element={<BooksLiked/>} />
        </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App
