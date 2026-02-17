// Componente genericos
import { Header } from './components/Header'

// Componentes de gifs
import Search from './components/gifs/Search'
import PreviousSearch from './components/gifs/PreviousSearch'
import ConstainerGifs from './components/gifs/ConstainerGifs'

// Importamos los gifs mockeados
// import { mockGifs } from './mocks-data/gifs.mock'
import { useState } from 'react'

// Actions para obtener los gifs por query
import { getGifsByQuery } from './components/gifs/actions/get-gifs-by-query.actions'
import type { Data } from './types/gif/gif.interno'


export default function GifsApp() {

  const [gifs, setGifs] = useState<Data[]>([])
  const [previousSearches, setPreviousSearches] = useState<string[]>([])

  const handleSearch = async (search: string) => {
    const spaceRemoved = search.trim().toLowerCase()
    if (previousSearches.length > 4) previousSearches.pop()
    if ((previousSearches.includes(spaceRemoved)) || (spaceRemoved.length === 0)) return
    setPreviousSearches( prev => [spaceRemoved, ...prev])

    const dataQuery: Data[] = await getGifsByQuery(search)
    setGifs(dataQuery)

  }

  // todo: solo hace click, no hace la busqueda, eso se vera mas adelante
  const handleClickPreviousSearch = (search: string) => {
    console.log(search)
  }

  return (
    <>
      {/* Headers */}
      <Header title="Buscador de gifs" description="Descubre y comparte el gifs perfecto" />

      {/* Search */}
      <Search placeholder="buscar gifs" onSearch={handleSearch} />

      {/* Busquedas previas */}
      <PreviousSearch previousSearches={previousSearches} fnClickPreviousSearch={handleClickPreviousSearch}  />

      {/* Container de gifs ... */}
      <ConstainerGifs data={gifs} />

    </>
  )
}
