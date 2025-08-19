import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInupt from "./SearchInupt";

const Navbar = () => {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize="60px" />
            <SearchInupt />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar;