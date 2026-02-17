// Componente genericos
import { Header } from './components/Header'

// Componentes de gifs
import Search from './components/gifs/Search'
import PreviousSearch from './components/gifs/PreviousSearch'
import ConstainerGifs from './components/gifs/ConstainerGifs'

// Hooks
import { useGifphy } from './components/gifs/hooks/useGifphy'

export default function GifsApp() {
  const {
    // values
    gifs,
    previousSearches,

    // handlers
    handleSearch,
    handleClickPreviousSearch,
  } = useGifphy()

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
