// Types
import type { Data } from "../../types/gif/gif.interno";

export default function ConstainerGifs({ data } : {data : Data[] | undefined}) {

  return (
    <div className="gifs-container">
      {
        data?.map(gif => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>{gif.width} x {gif.height}</p>
          </div>
        ))
        
        
      }
    </div>
  )
}
