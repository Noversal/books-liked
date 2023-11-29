import Books from '../components/Books'
import { Filters } from '../components/Filters'
import { useFilterBook } from '../hook/useFilterBook'
import { library } from '../mock/books.json'

export default function AllBooks () {
  const booksMock = library
  const { filterAplied } = useFilterBook()

  const booksFilters = filterAplied({ books: booksMock })
  return (
        <main>
        <h1>Libros</h1>
        <Filters />
        {
          booksFilters.length !== 0
            ? <Books books={booksFilters} />
            : <div className='flex h-screen justify-center items-center'>
                <h2>No hay libros encontrados</h2>
              </div>
        }
        </main>
  )
}
