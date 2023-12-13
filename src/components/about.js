import React from "react";
import {
  Box,
  Text,
  Heading,
  Button,
  SimpleGrid,
  Code,
  Stack,
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
          <Box>
            
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                React
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                JavaScript
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                Python
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                C++
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                Node.js
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                Express.js
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                Git
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                Firebase
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                NoSQL
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                Agile
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                ChakraUI
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                MaterialUI
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                Tailwind
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                Bootstrap
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                HTML
              </Code>
              <Code
                bgColor="purple.400"
                textColor={"white"}
                px={3}
                fontSize={"lg"}
                fontWeight="bold"
                m={1}
              >
                CSS
              </Code>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default About;
