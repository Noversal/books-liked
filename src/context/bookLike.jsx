import { createContext, useReducer } from 'react'

export const BookLikeContext = createContext()

const ADD_LIKE = 'ADD_LIKE'
const REMOVE_LIKE = 'REMOVE_LIKE'

const initialState = JSON.parse(window.localStorage.getItem('likes')) || []
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case ADD_LIKE: {
      const ISBN = actionPayload
      if (!state.includes(ISBN)) {
        const newLikes = [...state, ISBN]
        window.localStorage.setItem('likes', JSON.stringify(newLikes))
        return newLikes
      }

      return state
    }

    case REMOVE_LIKE: {
      const ISBN = actionPayload
      if (state.includes(ISBN)) {
        const newLikes = state.filter((like) => like !== ISBN)
        window.localStorage.setItem('likes', JSON.stringify(newLikes))
        return newLikes
      }

      return state
    }

    default:
      return state
  }
}

export function BookLikeProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addLike = ({ ISBN }) => dispatch({ type: ADD_LIKE, payload: ISBN })

  const removeLike = ({ ISBN }) => dispatch({ type: REMOVE_LIKE, payload: ISBN })

  return (
      <BookLikeContext.Provider value={{
        likes: state,
        addLike,
        removeLike
      }}>
            {children}
        </BookLikeContext.Provider>
  )
}
