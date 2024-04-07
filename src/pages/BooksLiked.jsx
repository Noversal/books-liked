import { library as books } from '../mock/books.json'
import { useLike } from '../hook/useLike'
import Books from '../components/Books'
import { useFilterBook } from '../hook/useFilterBook'

export default function BooksLiked () {
  const { byId } = useFilterBook()
  const { likes } = useLike()

  const booksLike = byId({books, likes})

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
