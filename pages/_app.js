import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {ApiProvider} from "../hooks/useApi";

function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider theme={theme}>
            <ApiProvider>
                <Component {...pageProps} />
            </ApiProvider>
        </ChakraProvider>
    );
}

const theme = extendTheme({
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    },
    styles: {
        global: {
            ".image": {
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
            },
            ".image-card:hover": {
                filter: "brightness(0.5)",
            },
        },
    }
})

export default MyApp;