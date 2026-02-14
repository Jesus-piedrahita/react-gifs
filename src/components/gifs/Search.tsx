
export default function Search( {placeholder} : {placeholder: string} ) {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} />
      <button>Buscar</button>
    </div>
  )
}
