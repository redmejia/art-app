import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { NEW_ART_LIST } from "../query";
import { Art } from "../types";

export const useNewArt = () => {
    const {data, loading, error } = useQuery(NEW_ART_LIST);
    const [newArt, setNewArt] = useState<Art[]>([])

    useEffect(()=> {
        if (!data) return 
        setNewArt(data.art_list)
    },[data])

    return {newArt, loading, error}
}