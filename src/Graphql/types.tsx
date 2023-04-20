export type Artists = {
    id?: number;
    name?: string;
    profession?: string;
}
// All Art or single art info for new
export type Art = {
    artist?: Artists;
    art_id?: number;
    photo_url?: string;
    art_description?: string;
}

export type ArtAll = {
    art_list?:Art;
    list?: Artists;
}