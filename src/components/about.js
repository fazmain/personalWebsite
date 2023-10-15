import React from "react";
import {
  Box,
  Text,
  Heading,
  Button,
  SimpleGrid,
  Code,
  HStack,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  return (
    <Box my={10}>
      <SimpleGrid columns={[1, 1, 2]} spacing={7}>
        <Box>
          <Heading py={5}>// about me</Heading>
          <Text my={2}>
            Hopping between binary trees as a sophomore at The College of
            Wooster, I'm not just{" "}
            <b>majoring in Computer Science with a Data Science minor</b>, I'm
            on a quest to find the "fun" in functions.
          </Text>
          <Text my={2}>
            When I'm not playing hide and seek with algorithms, I'm stirring up
            the product pot, dreaming of the next big "Eureka!" moment. Living
            in a world that's changing faster than a JavaScript framework, I'm
            no ordinary coder or product whizz - I'm both!
          </Text>
          <Text my={2}>
            <b>My mission?</b> To craft a digital wonder that leaves a million
            users awestruck. Here's to shaking up the world, one code string and
            product strategy at a time!
          </Text>
          <RouterLink to="/about">
            <Button
              variant="link"
              colorScheme="purple"
              align={"right"}
              my={2}
              rightIcon={<GoArrowUpRight />}
            >
              more about me
            </Button>
          </RouterLink>
        </Box>
        <Box>
          <Heading py={5}>// my skills</Heading>
          <HStack my={2}>
            <Code
              bgColor="purple.400"
              textColor={"white"}
              px={3}
              fontSize={"lg"}
              fontWeight="bold"
            >
              React
            </Code>
            <Code
              bgColor="purple.400"
              textColor={"white"}
              px={3}
              fontSize={"lg"}
              fontWeight="bold"
            >
              JavaScript
            </Code>
            <Code
              bgColor="purple.400"
              textColor={"white"}
              px={3}
              fontSize={"lg"}
              fontWeight="bold">
              Python 
              </Code>

          </HStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default About;
