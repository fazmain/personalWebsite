import React from "react";
import {
  Box,
  Heading,
  Text,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Stack,
  Image,
  Button,
  Code,
  HStack,
  Center,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";

import FeastFinder from "../assets/feast_finder.png";
import Shiree from "../assets/shiree.png";

import { Link as RouterLink } from "react-router-dom";

const projects = [
  {
    image: FeastFinder,
    title: "FeastFinder",
    tags: ["React", "Firebase", "Chakra UI"],
    description: "Restaurant search based on Natural Language queries!",
  },
  {
    image: Shiree,
    title: "Shiree",
    tags: ["Case Study", "Concept", "Design"],
    description:
      "End-to-end pre-hiring assessment software to make hiring simple, efficient and bias-free!",
  },
];

export default function ProjectContent() {
  return (
    <Center>
      <Box my={1} py={10}>
        <SimpleGrid columns={[1, 1, 2]} spacing={"70px"} my={10}>
          {projects.map((project, index) => (
            <Card key={index} maxW="lg" bg="transparent" border="1px">
              <CardBody>
                <Image
                  src={project.image}
                  alt={project.title}
                  borderRadius="lg"
                  border={"1px"}
                  borderColor={"gray.400"}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="lg">// {project.title}</Heading>
                  <HStack spacing={3}>
                    {project.tags.map((tag, tagIndex) => (
                      <Code
                        key={tagIndex}
                        bgColor="purple.500"
                        textColor={"white"}
                        px={3}
                        fontSize={"sm"}
                        fontWeight="bold"
                        colorScheme="purple"
                      >
                        {tag}
                      </Code>
                    ))}
                  </HStack>
                  <Text>{project.description}</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <RouterLink
                  to={`/projects/${encodeURIComponent(project.title)}`}
                >
                  <Button
                    size="lg"
                    color="purple.500"
                    variant={"link"}
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                    rightIcon={<ArrowForwardIcon />}
                    isDisabled
                  >
                    Explore
                  </Button>
                </RouterLink>
              </CardFooter>
              <Code
                bgColor="purple.200"
                textColor={"white"}
                px={3}
                fontSize={"sm"}
                fontWeight="bold"
                colorScheme="purple"
              >
                *Work in progress
              </Code>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Center>
  );
}
