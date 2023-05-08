import { gql } from "@apollo/client";


export const ART_ARTISTS = gql`
query {
    list {
        id
        name
        profession
    }
    art_list{
        artist{
            id
            name
            profession
        }
        art_id 
        photo_url 
        art_description
    }
}`;


export const NEW_ART_LIST = gql`
query {
    art_list{
        artist{
            id
            name
            profession
        }
        art_id 
        photo_url 
        art_description
    }
}`;

export const ART_PIECE = gql`
query Art($art_id: String!) {
    art(art_id: $art_id){
        artist {
            id
            name
            profession
        }
        art_id
        photo_url 
        art_description
    }
}`;