// Types
import type { Data } from "../../types/gif/gif.interno";

export default function ConstainerGifs({ data } : {data : Data[] | undefined}) {
  return (
    <div className="gifs-container">
      {
        data?.map(gif => (
          <div key={gif.id} className="gif-item">
            <img src={gif.url} alt={gif.title} width={gif.width} height={gif.height} />
            <p>{gif.title}</p>
            <span>{gif.width} x {gif.height}</span>
          </div>
        ))
        
        
      }
    </div>
  )
}
