import { Text, List, HStack, Image, Skeleton, SkeletonText, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data: genres, error, isLoading } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return null;

    return (
        <>
            <List.Root variant='plain'>
                {isLoading && skeletons.map(skeleton => (
                    <HStack key={skeleton} paddingY='5px'>
                        <Skeleton boxSize='32px' />
                        <SkeletonText noOfLines={1} />
                    </HStack>
                ))}
                {genres.map(genre => (
                    <List.Item key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='plain'>{genre.name}</Button>
                        </HStack>
                    </List.Item>
                ))}
            </List.Root>
        </>
    )
}

export default GenreList;