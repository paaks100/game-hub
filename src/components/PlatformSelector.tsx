import { Button, HStack, Menu, Portal, Text } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { FaCheck } from 'react-icons/fa';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
    const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) return null;

    return (
        <Menu.Root>
            <Menu.Trigger>
                <Button variant='ghost' justifyContent='space-between'>
                    <Text>{selectedPlatform?.name || 'Platforms'}</Text>
                    <BsChevronDown />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data?.results.map(platform => (
                            <HStack key={platform.id} onClick={() => setSelectedPlatformId(platform.id)} justifyContent='space-between'>
                                <Menu.Item>
                                    {platform.name}
                                    {selectedPlatform?.id === platform.id && <Menu.ItemCommand><FaCheck /></Menu.ItemCommand>}
                                </Menu.Item>
                            </HStack>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default PlatformSelector;