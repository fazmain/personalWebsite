import React from "react";
import {
  Box,
  Text,
  Heading,
  Code,
  Button,
  Flex,
  Spacer,
  Center,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import { Link as RouterLink } from "react-router-dom";

import Resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <Box>
      <Box>
        <Heading size="4xl" py={3}>
          hi 👋🏽 i'm{" "}
          <Text as="span" color="purple.500">
            Faiaz
          </Text>
        </Heading>
      </Box>
      <Flex direction="column" h="full">
        <Heading size="xl" py={3}>
          // aspiring product guy making stuff*
        </Heading>
        <Spacer />
        <Box align="right">
          <Code
            bgColor="purple.400"
            textColor={"white"}
            px={3}
            fontSize={"md"}
            fontWeight="bold"
          >
            *for humans
          </Code>
        </Box>
      </Flex>
      <Center>
        <Box my={10} p={6} border="1px" borderRadius={"10px"}>
          <Box>
            <Text p={3} fontSize={"lg"}>
              Currently looking for{" "}
              <Text as="span" color="purple.800" fontWeight="bold">
                product management // software engineering{" "}
              </Text>
              internships for Summer 2024
            </Text>
          </Box>
          <a href={Resume} target="_blank">
            <Button
              colorScheme="purple"
              variant="link"
              p={3}
              rightIcon={<ChevronRightIcon />}
            >
              Look at my resume
            </Button>
          </a>
          <RouterLink to="https://www.linkedin.com/in/faiazmain/">
            <Button
              colorScheme="purple"
              variant="link"
              p={3}
              rightIcon={<ChevronRightIcon />}
            >
              Go to my Linkedin
            </Button>
          </RouterLink>
          <RouterLink to="https://github.com/fazmain">
            <Button
              colorScheme="purple"
              variant="link"
              p={3}
              rightIcon={<ChevronRightIcon />}
            >
              Here is my Github
            </Button>
          </RouterLink>
        </Box>
      </Center>
    </Box>
  );
};

export default Hero;
