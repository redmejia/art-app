import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Art } from "../types"


export const useNewArtList = (num: number) => {
    const { data, loading, error } = useQuery(gql`
    query {
        new_art: firtsNthArt(nth_num: {nth : ${num}}){
             artist {
                 name
                 profession
             }
             art_id
             art_description
             photo_url
         }
     }`)

    const [art, setArt] = useState<Art[]>([])
    useEffect(()=> {
        if (!data) return
        setArt(data.new_art);
    },[data])

    return {art, loading, error}
}