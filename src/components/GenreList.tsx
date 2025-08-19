import { List, HStack, Image, Skeleton, SkeletonText, Button, Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);
    const { data: genres, error, isLoading } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return null;

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List.Root variant='plain'>
                {isLoading && skeletons.map(skeleton => (
                    <HStack key={skeleton} paddingY='5px'>
                        <Skeleton boxSize='32px' />
                        <SkeletonText noOfLines={1} />
                    </HStack>
                ))}
                {genres?.results.map(genre => (
                    <List.Item key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                objectFit='cover'
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace='normal'
                                textAlign='left'
                                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                                padding={0}
                                onClick={() => setSelectedGenreId(genre.id)}
                                fontSize='lg'
                                variant='ghost'
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </List.Item>
                ))}
            </List.Root>
        </>
    )
}

export default GenreList;