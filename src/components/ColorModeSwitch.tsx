import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <HStack>
            <Switch.Root checked={colorMode === 'dark'} onCheckedChange={toggleColorMode} colorPalette='green'>
                <Switch.HiddenInput />
                <Switch.Control />
                <Text whiteSpace='nowrap'>Dark Mode</Text>
            </Switch.Root>
        </HStack>
    )
}

export default ColorModeSwitch;