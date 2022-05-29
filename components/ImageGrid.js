import Image from "next/image";
import {Box, Link, SimpleGrid, Text, VStack, Flex} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {useEffect, useRef} from "react";
import useApi from "../hooks/useApi";

const ImageGrid = ({img_width, img_height}) => {

    const {data, isOpen, openSidebar, getItem} = useApi();
    const IMG = "https://picsum.photos/id";

    return (
        <Box p={4} mt={4} w={isOpen ? "60vw" : "100vw"}>
            <SimpleGrid columns={isOpen ? [1, 1, 1, 2, 3] : [1, 2, 3, 4, 5]} spacing="20px">
                {
                    data?.map(({id, url, author}) => {
                        const src = `${IMG}/${id}/${img_width}/${img_height}`;
                        return (
                            <VStack
                                key={id}
                                spacing={1}
                                align="flex-start"
                                cursor="pointer"
                            >
                                <Flex position="relative" minW="100%" minH="240px"
                                      transition="all 0.2s ease-in-out"
                                      _hover={{
                                          boxShadow: "0px 0px 10px rgba(0,0,0,0.7)"
                                      }}
                                      onClick={async () => {
                                          await getItem(id);
                                          openSidebar();
                                      }}

                                >
                                    <Image
                                        id={id}
                                        src={src}
                                        alt={author}
                                        objectFit="cover"
                                        layout="fill"
                                        loader={() => src}
                                    />
                                </Flex>
                                <VStack spacing={1} align="flex-start" pos="relative">
                                    <Text>
                                        {author}
                                    </Text>
                                    <Link href={url} isExternal>
                                        Go To Unsplash <ExternalLinkIcon mx='2px'/>
                                    </Link>
                                </VStack>
                            </VStack>
                        )
                    })
                }
            </SimpleGrid>
        </Box>
    )
}

export default ImageGrid;