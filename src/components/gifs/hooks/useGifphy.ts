// React
import { useRef, useState } from "react";

// Actions axios
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

//types
import type { Data } from "../../../types/gif/gif.interno";

// const gifCache: Record<string, Data[]> = {}

export const useGifphy = () => {

    const [gifs, setGifs] = useState< Data[] >([])
    const [previousSearches, setPreviousSearches] = useState< string[] >([])

    const gifCache = useRef<Record<string, Data[]>>({})


    const handleSearch = async (search: string) => {
    const spaceRemoved = search.trim().toLowerCase()
    if (previousSearches.length > 4) previousSearches.pop()
    if ((previousSearches.includes(spaceRemoved)) || (spaceRemoved.length === 0)) return
    setPreviousSearches( prev => [spaceRemoved, ...prev])

    const dataQuery: Data[] = await getGifsByQuery(search)
    setGifs(dataQuery)

    gifCache.current[spaceRemoved] = dataQuery

    }

    const handleClickPreviousSearch = async (registeredWord: string) => {
        if (gifCache.current[registeredWord]) {
            setGifs(gifCache.current[registeredWord])

            return
        }

        const dataQuery: Data[] = await getGifsByQuery(registeredWord)
        setGifs(dataQuery)
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