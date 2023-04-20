import { gql } from "@apollo/client";


export const ARTIST_LIST = gql`
query {
    list {
        id
        name
        profession
    }
}`;