import { useQuery } from "@apollo/client"
import { gql } from "@apollo/client";

import { useEffect, useState } from "react"
import { Art } from "../types"

export const useArt = (art_id: string) => {
    
    const { data, loading, error } = useQuery(gql`
    query {
        art : artInput(input: {art_id: "${art_id}"}){
            artist {
                name
                profession
            }
            art_id
            photo_url 
            art_description
        }
    }`)

    const [art, setArt] = useState<Art>({})

    useEffect(() => {
        if (!data) return
        setArt(data.art)
    }, [data])

    
    return { art, loading, error }
}