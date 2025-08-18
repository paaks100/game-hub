import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { CACHE_KEY_GENRES } from "../constants";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
    games_count: number;
    slug: string;
}

const useGenres = () => useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres }
});

export default useGenres;