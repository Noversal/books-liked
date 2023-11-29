import { useContext, useId, useState } from 'react'
import { FilterBookContext } from '../context/bookfilter'

export function Filters () {
  const [pages, setPages] = useState(0)
  const { filtersChange } = useContext(FilterBookContext)
  const paginasID = useId()
  const generoID = useId()

  function handleSubmit (event) {
    event.preventDefault()
    const formInputs = new FormData(event.target)
    const pages = Number(formInputs.get('pages'))
    const genre = formInputs.get('genre')
    filtersChange({ pages, genre })
  }

  return (
      <form
          onSubmit={handleSubmit}
          className='flex justify-around p-3'>
          <div>
            <div className='flex gap-3 justify-center'>
                <label htmlFor={paginasID}>Cantidad Paginas</label>
                <input
                    name='pages'
                    value={pages}
                    id={paginasID}
                    type="range"
                    max={1200}
                    onChange={(event) =>
                      setPages(() => event.target.value)
                    }
                />
                {pages}
            </div>
            <div className='flex gap-3 justify-center'>
                <label htmlFor={generoID}>Generos</label>
                <select
                    name="genre"
                    id={generoID}
                >
                    <option value="Fantasía">Fantasía</option>
                    <option value="Ciencia ficción">Ciencia ficción</option>
                    <option value="Zombies">Zombies</option>
                    <option value="Terror">Terror</option>
                </select>
                </div>
            </div>
          <button>Enviar</button>
      </form>
  )
}
