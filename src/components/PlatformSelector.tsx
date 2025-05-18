import { Button, Menu, MenuContent, MenuItem, MenuTrigger, Text } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import React from 'react';

const PlatformSelector = () => {
    const { data: platforms, error } = usePlatforms();

    if (error) return null;

    return (
        <Menu.Root>
            <Menu.Trigger>
                <Button variant='ghost' justifyContent='space-between'>
                    <Text>Platforms</Text>
                    <BsChevronDown />
                </Button>
            </Menu.Trigger>
            <Menu.Positioner>
                <Menu.Content>
                    {platforms.map(platform => (
                        <React.Fragment key={platform.id}>
                            <Menu.Item>{platform.name}</Menu.Item>
                        </React.Fragment>
                    ))}
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
    )
}

export default PlatformSelector;