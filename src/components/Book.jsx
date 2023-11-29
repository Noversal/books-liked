import { DisLike, Like } from './Icons'
import { useLike } from '../hook/useLike'

export function Book ({ title, cover, genre, author, ISBN }) {
  const { likes, addLike, removeLike } = useLike()

  function handleLikes ({ ISBN }) {
    return function () {
      if (likes.includes(ISBN)) {
        return removeLike({ ISBN })
      }
      addLike({ ISBN })
    }
  }

  return (
    <li className='list-none max-w-[200px] bg-slate-100/[.2] pb-3 rounded-b-md'>
      <div className='w-[200px] relative'>
        <img
          className='w-full rounded-t-md object-cover h-80'
          src={ cover }
          alt={ title } />
        <button
          className='absolute bottom-2 left-2'
          onClick={handleLikes({ ISBN })}
        >{likes.includes(ISBN)
          ? <DisLike color='text-red-600' />
          : <Like color='text-green-600' />
          }</button>

      </div>
      <div className='flex flex-col'>
        <span className='bg-red-500'>{ genre }</span>
        <h3 className='font-bold px-2 text-base'>{ title }</h3>
        <span>{ author.name }</span>
      </div>
    </li>
  )
}
