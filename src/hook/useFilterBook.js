import { useContext } from 'react'
import { FilterBookContext } from '../context/bookfilter'

export function useFilterBook () {
  const booksFilters = useContext(FilterBookContext)

  if (booksFilters === undefined) {
    throw new Error('No tienes contexto del FilterBooks')
  }

  return booksFilters
}
