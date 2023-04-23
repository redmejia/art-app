import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { ART_ARTISTS } from "../query";
import { Art, Artists } from "../types";


export const useArtsList = () => {
    const { data, loading, error } = useQuery(ART_ARTISTS)
    const [artistsList, setArtistsList] = useState<Artists[]>([])
    const [newArtList, setNewArtList] = useState<Art[]>([]) // show incoming art for event

    useEffect(() => {
        if (!data) return
        setArtistsList(data.list)
        setNewArtList(data.art_list);
    }, [data])

    return { artistsList, newArtList, loading, error }
}