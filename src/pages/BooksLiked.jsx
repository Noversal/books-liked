import { useEffect, useState } from 'react'
import { library } from '../mock/books.json'
import { useLike } from '../hook/useLike'
import Books from '../components/Books'

export default function BooksLiked () {
  const booksMock = library
  const [booksLike, setBookLike] = useState([])
  const { likes } = useLike()

  useEffect(() => {
    const likedBook = booksMock.filter(({ book }) => {
      return likes.includes(book.ISBN)
    })
    setBookLike(likedBook)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likes])

  return (
    <>
      <h1 className='py-4'>Libros que te gustan</h1>
      {
        booksLike.length !== 0
          ? <Books books={booksLike} />
          : <div className='flex justify-center items-center h-screen'>
              <h2>No hay libros que te gusten</h2>
            </div>
      }
    </>
  )
}
