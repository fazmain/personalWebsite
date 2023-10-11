import React from "react";
import {
  Box,
  Heading,
  Text,
  Card,
  CardBody,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";

const texts = {
  Define:
    "Discovering problems isn't simply a task for me, it's an expedition. I delve deep into the heart of user struggles, brainstorming and shaping ideas into impactful product concepts.",
  Design:
    "My design process is akin to narrating a visual journey. Employing user flows, wireframes, and user stories, I design interfaces that not only function, but resonate with users.",
  Develop:
    "Code is more than a language to me, it's the fabric I use to stitch together our digital reality. Balancing system design choices and dependencies, I transform the innovative ideas into tangible applications.",
  Deploy:
    "The triumphant debut of the solution! Equipped with robust validation mechanisms and a user feedback-driven iterative approach, we set sail more than just a product; we chart the course for its prosperous journey.",
};

export default function Skills() {
  return (
    <Box my={10}>
      <Box>
        <Heading py="5">// how i work</Heading>
        <Text my="2" fontSize="md">
          I mix my tech, design and business skills to build products that solve
          everyday problems. I love building lean MVPs and launching them to
          test my ideas and iterate for better versions.
        </Text>
        <Text my="2" fontSize="md">
          My <b>startup // work experiences </b>
          help me have not only refined my problem-solving skills but also
          fostered resilience, an understanding of market dynamics, and a
          commitment to continuous learning and innovation.
        </Text>
      </Box>
      <Box>
        <Center>
          <SimpleGrid columns={[1, 1, 2]} spacing={"70px"} my={10}>
            <Card
              maxW="lg"
              p={2}
              variant="outline"
              bg="transparent"
              border="1px"
            >
              <CardBody>
                <Heading fontSize="2xl" pb={3} color={"purple.500"}>
                  // Define
                </Heading>
                <Text>{texts.Define}</Text>
              </CardBody>
            </Card>
            <Card
              maxW="lg"
              p={2}
              variant="outline"
              bg="transparent"
              border="1px"
            >
              <CardBody>
                <Heading fontSize="2xl" pb={3} color={"purple.500"}>
                  // Design
                </Heading>
                <Text>{texts.Design}</Text>
              </CardBody>
            </Card>
            <Card
              maxW="lg"
              p={2}
              variant="outline"
              bg="transparent"
              border="1px"
            >
              <CardBody>
                <Heading fontSize="2xl" pb={3} color={"purple.500"}>
                  // Develop
                </Heading>
                <Text>{texts.Develop}</Text>
              </CardBody>
            </Card>
            <Card
              maxW="lg"
              p={2}
              variant="outline"
              bg="transparent"
              border="1px"
            >
              <CardBody>
                <Heading fontSize="2xl" pb={3} color={"purple.500"}>
                  // Deploy
                </Heading>
                <Text>{texts.Deploy}</Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Center>
      </Box>
    </Box>
  );
}
