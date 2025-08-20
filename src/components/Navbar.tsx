import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInupt from "./SearchInupt";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <HStack padding='10px'>
            <Link to='/'><Image src={logo} boxSize="60px" objectFit='cover' /></Link>
            <SearchInupt />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar;