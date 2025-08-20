import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import Navbar from "../components/Navbar";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <Navbar />
            <Box padding={5}>
                <Heading size='5xl'>Oops...</Heading>
                <Text>
                    {isRouteErrorResponse(error) ? 'This page does not exist' : 'Sorry, an unexpected error has occured.'}
                </Text>
            </Box>
        </>
    )
}

export default ErrorPage