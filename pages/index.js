import Head from "next/head";
import {Box, Flex} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import ImageGrid from "../components/ImageGrid";
import useApi from "../hooks/useApi";
import {useEffect} from "react";
import SideBar from "../components/SideBar";

export default function Home() {
    const {isOpen, getData} = useApi();

    useEffect(() => {
        getData();
    }, []);

    return (
        <Box>
            <Head>
                <title>Image Search</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Box minH="100vh">
                <NavBar/>
                <Flex>
                    <ImageGrid img_height="350" img_width="350"/>
                    {isOpen && <SideBar/>}
                </Flex>
            </Box>
        </Box>
    );
}