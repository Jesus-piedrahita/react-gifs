// React
import { useState } from "react";

// Actions axios
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

//types
import type { Data } from "../../../types/gif/gif.interno";


export const useGifphy = () => {

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

    return {
        // values
        gifs,
        previousSearches,

        // handlers
        handleSearch,
        handleClickPreviousSearch,
    }
}