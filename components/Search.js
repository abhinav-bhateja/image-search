import {useState} from "react";
import {HStack, Input, InputGroup, InputLeftElement, InputRightElement, Icon} from "@chakra-ui/react";
import {AddIcon, Search2Icon, SearchIcon} from "@chakra-ui/icons";

const Search = () => {
    const [active, setActive] = useState(false);
    return (
        <InputGroup>
            {active && (
                <InputLeftElement height="100%" children={<SearchIcon color="gray.300"/>}/>
            )}
            <Input
                borderRadius={24}
                w={{base: "300px", md: "400px", lg: "600px"}}
                size="lg"
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
            />
            <InputRightElement height="100%" children={
                <HStack spacing={4} align="center" mr={24} justify="center">
                    <ImageIcon/>
                    <VoiceSearch/>
                    <SearchRight/>
                </HStack>
            }/>
        </InputGroup>
    )
}

export default Search;

const SearchRight = () => {
    return (
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" cursor="pointer"
              fill="#4285f4">
            <path
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </Icon>
    )
}

const VoiceSearch = () => {
    return (
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" cursor="pointer">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="#4285F4"
                  d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"></path>
            <path fill="#34A853" d="M11 18.92h2V22h-2z"></path>
            <path fill="#F4B400" d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"></path>
            <path fill="#EA4335"
                  d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41C8.32 18.21 10.07 19 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z"></path>
        </Icon>
    )
}

const ImageIcon = () => {
    return (
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 487" width="24px" height="24px" cursor="pointer"
              fill="#757575">
            <g>
                <g>
                    <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z
			 M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9
			v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z
			 M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z
			 M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"/>
                </g>
            </g>
        </Icon>
    )
}