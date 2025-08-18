import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { CACHE_KEY_GENRES } from "../constants";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
    games_count: number;
    slug: string;
}

const useGenres = () => useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres
});

export default useGenres;