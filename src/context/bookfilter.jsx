import { createContext, useState } from 'react'

export const FilterBookContext = createContext()

export function FilterBookProvider ({ children }) {
  const [filters, setFilters] = useState({
    genre: 'all',
    pages: 0
  })

  function filtersChange ({ pages, genre }) {
    setFilters(() => ({
      genre,
      pages
    }))
  }

  const filterAplied = ({ books }) => {
    const newBooks = books.filter(({ book }) => {
      return (
        book.pages >= filters.pages &&
        (
          filters.genre === 'all' ||
          book.genre === filters.genre
        )
      )
    })
    return newBooks
  }

  const byId  = ({ books, likes }) => {
    const likedBook = books.filter(({ book }) => {
      return likes.includes(book.ISBN)
    })
    return likedBook
  }

  return (
      <FilterBookContext.Provider value={{
        filters,
        filtersChange,
        filterAplied,
        byId
      }}>
            {children}
        </FilterBookContext.Provider>
  )
}
