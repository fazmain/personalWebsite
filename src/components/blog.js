import React from "react";
import {
  Box,
  Heading,
  Text,
  Card,
  CardBody,
  SimpleGrid,
  Button,
  CardFooter,
  Center,
} from "@chakra-ui/react";

const blogs = [
  {
    title: "A Universal GPT-4 Backend Server? The Good, The Bad, and The Ugly",
    description:
      "Is making a unified backend server for all sorts of front-end GPT applications a good idea? In this blog I have tried to think about this in concise detail!",
  },
  {
    title: "A Universal GPT-4 Backend Server? The Good, The Bad, and The Ugly",
    description:
      "Is making a unified backend server for all sorts of front-end GPT applications a good idea? In this blog I have tried to think about this in concise detail!",
  },
  {
    title: "A Universal GPT-4 Backend Server? The Good, The Bad, and The Ugly",
    description:
      "Is making a unified backend server for all sorts of front-end GPT applications a good idea? In this blog I have tried to think about this in concise detail!",
  },
];

export default function Blog() {
  return (
    <Box my={10}>
      <Heading py="5">// things i write</Heading>
      <Center>
        <Box>
          <SimpleGrid columns={[1, 1, 3]} spacing={7} my={10}>
            {blogs.map((blog, index) => (
              <Card
                key={index}
                maxW="lg"
                p={2}
                variant="outline"
                border="1px"
                bg="transparent"
              >
                <CardBody>
                  <Heading fontSize="2xl" pb={3}>
                    {blog.title}
                  </Heading>
                  <Text>{blog.description}</Text>
                </CardBody>
                <CardFooter>
                  <Button colorScheme="purple" size="sm">
                    read more
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Center>
    </Box>
  );
}
