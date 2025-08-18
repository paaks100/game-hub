import { Button, HStack, Menu, Portal, Text } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/usePlatforms';
import { FaCheck } from 'react-icons/fa';

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data: platforms, error } = usePlatforms();

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
                        {platforms?.results.map(platform => (
                            <HStack key={platform.id} onClick={() => onSelectPlatform(platform)} justifyContent='space-between'>
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