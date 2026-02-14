interface Data {
  id : string ;
  titulo : string ;
  url : string ;
  ancho : number ;
  altura : number ;
}

export default function ConstainerGifs({ data } : { data : Data[]}) {
  return (
    <div className="gifs-container">
      {
        data.map((gif) => (
          <div key={gif.id} className='gif-card'>
            <img src={gif.url} alt={gif.titulo} />
            <h3>{gif.titulo}</h3>
            <p> {gif.ancho} * {gif.altura} (1.5 mb) </p>
          </div>
        ))
      }
      </div>
  )
}
