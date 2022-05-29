import {Box, CloseButton, Flex, IconButton, Spinner, useBreakpointValue} from "@chakra-ui/react";
import Image from "next/image";
import useApi from "../hooks/useApi";

const SideBar = () => {
    const {item, closeSidebar} = useApi();
    console.log(item);

    const isSmall = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xl: false
    });


    return (
        <Box as={isSmall ? "" : "aside"} pos="sticky">
            <Flex p={8} bg="#171717" w={isSmall ? "100vw" : "40vw"} h="100%">
                <Flex position="relative" minW="100%" maxH="40vh">
                    <IconButton
                        bg="#0000008A"
                        color="white"
                        zIndex={10}
                        aria-label="close"
                        icon={<CloseButton/>}
                        _hover={{
                            bg: "#0000004A"
                        }}
                        borderRadius={32}
                        position="absolute"
                        top={2}
                        left={2}
                        onClick={() => {
                            closeSidebar();
                        }}
                    />
                    <Image
                        src={item?.download_url}
                        alt={item?.author}
                        objectFit="cover"
                        layout="fill"
                        loader={() => item?.download_url}
                    />
                </Flex>
            </Flex>
        </Box>
    )
}

export default SideBar;