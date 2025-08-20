import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
    id: number;
    name: string;
    description_raw: string;
    slug: string;
    genres: Genre[];
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    publishers: Publisher[];
    metacritic: number;
    rating_top: number;
    rating: number;
}