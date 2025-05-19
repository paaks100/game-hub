import { Input, InputElement, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInupt = () => {
    return (
        <InputGroup startElement={<BsSearch />}>
            <Input borderRadius={20} placeholder="Search games..." variant='outline' />
        </InputGroup>
    )
}

export default SearchInupt;