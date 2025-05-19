import { Button, HStack, Menu, Portal, Text } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';

interface Props {
}

const SortSelector = ({ }: Props) => {
    const sortFactors = ['Relevance', 'Date added', 'Name', 'Release Date', 'Popularity', 'Average rating'];

    return (
        <Menu.Root>
            <Menu.Trigger>
                <Button variant='ghost' justifyContent='space-between'>
                    {/* <Text>{selectedPlatform?.name || 'Platforms'}</Text> */}
                    <Text>Order by: Relevance</Text>
                    <BsChevronDown />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {sortFactors.map(factor => (
                            <HStack key={factor} justifyContent='space-between'>
                                <Menu.Item>
                                    {factor}
                                    <Menu.ItemCommand><FaCheck /></Menu.ItemCommand>
                                </Menu.Item>
                            </HStack>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default SortSelector;