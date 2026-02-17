// Types 
import type { Gifs } from "../../../types/gif/gif.type";

import { giphyApi } from "./giphy-api/giphy.api";

export const getGifsByQuery = async (query: string) => {
   const response = await giphyApi<Gifs>('search',{
        params : {
            q: query,
        }
   })
   return response.data.data.map(gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: parseInt(gif.images.original.width),
    height: parseInt(gif.images.original.height)
   }))
}

