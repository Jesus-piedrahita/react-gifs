// Componente genericos
import { Header } from './components/Header'

// Componentes de gifs
import Search from './components/gifs/Search'
import PreviousSearch from './components/gifs/PreviousSearch'
import ConstainerGifs from './components/gifs/ConstainerGifs'

// Importamos los gifs mockeados
import { mockGifs } from './mocks-data/gifs.mock'


export default function GifsApp() {
  return (
    <>
      {/* Headers */}
      <Header title="Buscador de gifs" description="Descubre y comparte el gifs perfecto" />

      {/* Search */}
      <Search placeholder="busca las fotos de diana" />

      {/* Busquedas previas */}
      <PreviousSearch />

      {/* Container de gifs ... */}
      <ConstainerGifs data={mockGifs} />

    </>
  )
}
