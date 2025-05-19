import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
    games_count: number;
    slug: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;