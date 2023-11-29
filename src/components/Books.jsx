import { Book } from './Book'

export default function Books ({ books }) {
  return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center'>
        {
          books.map(({ book }) => {
            const { title, cover, genre, year, author, ISBN } = book
            return (
              <Book
                key={ISBN}
                ISBN={ISBN}
                title={title}
                cover={cover}
                genre={genre}
                year={year}
                author={author}
              />
            )
          })
          }
      </ul>
  )
}
