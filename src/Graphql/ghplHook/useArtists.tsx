import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { ARTIST_LIST } from "../query";
import { Artists } from "../types";



export const useArtists = () => {
    const { data, loading, error } = useQuery(ARTIST_LIST)
    const [myList, setList] = useState<Artists[]>([])

    useEffect(() => {
        if (!data) return
    
        console.log(data);
        setList(data.list)
        
    }, [data])

    console.log("data ", data);
    

    return { myList, loading, error }
}