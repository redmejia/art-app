import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BASE_URL } from "./uri";

// use IP insted of localhost
export const client = new ApolloClient({
    uri : BASE_URL,
    cache: new InMemoryCache()
})