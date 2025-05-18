import { Text, List, ListItem, HStack, Image } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { data: genres, error, isLoading } = useGenres();

    return (
        <>
            {error && <Text>{error}</Text>}
            <List.Root variant='plain'>
                {genres.map(genre => (
                    <List.Item key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Text fontSize='lg'>{genre.name}</Text>
                        </HStack>
                    </List.Item>
                ))}
            </List.Root>
        </>
    )
}

export default GenreList;