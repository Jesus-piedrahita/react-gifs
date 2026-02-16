interface PreviousSearchProps {
  previousSearches: string[],
  fnClickPreviousSearch: (search: string) => void
}
export default function PreviousSearch({ previousSearches, fnClickPreviousSearch }: PreviousSearchProps) {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        { previousSearches.slice(0, 4).map((previous, index) => (
            <li key={index} onClick={() => fnClickPreviousSearch(previous)} >
              {previous}
            </li>
          )) }
      </ul>
    </div>
  )
}
