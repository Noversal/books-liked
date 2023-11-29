import { useContext } from 'react'
import { BookLikeContext } from '../context/bookLike'

export function useLike () {
  const contextLike = useContext(BookLikeContext)

  if (contextLike === undefined) {
    throw new Error('No tiene acceso a los Likes')
  }

  return contextLike
}
