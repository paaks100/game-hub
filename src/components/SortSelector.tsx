import { Button, HStack, Menu, Portal, Text } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import useGameQueryStore from '../store';

const SortSelector = () => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: 'metacritic', label: 'Popularity' },
        { value: 'rating', label: 'Average rating' }
    ];
    
    const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
    const setSelectedSortOrder = useGameQueryStore(s => s.setSortOrder);
    const currentSortOrder = sortOrders.find(order => order.value === selectedSortOrder);

    return (
        <Menu.Root>
            <Menu.Trigger>
                <Button variant='ghost' justifyContent='space-between'>
                    <Text>Order by: {currentSortOrder?.label || 'Relevance'}</Text>
                    <BsChevronDown />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {sortOrders.map(order => (
                            <HStack key={order.value} onClick={() => setSelectedSortOrder(order.value)} justifyContent='space-between'>
                                <Menu.Item>
                                    {order.label}
                                    {selectedSortOrder === order.value && <Menu.ItemCommand><FaCheck /></Menu.ItemCommand>}
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