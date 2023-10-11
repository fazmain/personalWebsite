import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function AboutMe() {
  return (
    <>
      <Header />
      <Box my={["10%", "10%", "5%"]} mx={["8%", "8%", "15%"]}>
        <Text>So As I said</Text>
        <Box>
          <Heading size="2xl" py={3}>
            I am {" "}
            <Text as="span" color="purple.500">
              Faiaz!
            </Text>
          </Heading>
          <Heading size="lg" py={3}>
          // here is more about me...
        </Heading>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
