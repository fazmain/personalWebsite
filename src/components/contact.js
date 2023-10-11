import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Heading,
  Code,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { FaPhone, FaEnvelope, FaMap, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={3} justifyContent="center" mt="10%">
      <Box p={3} maxW={"xl"}>
        <Heading size={"lg"}>// let's have virtual coffee* someday </Heading>
        <Box align="right">
          <Code
            bgColor="purple.400"
            textColor={"white"}
            px={3}
            fontSize={"md"}
            fontWeight="bold"
          >
            *or tea
          </Code>
        </Box>
      </Box>

      <Box p={3} maxW={"xl"}>
        <Heading size={"md"}>// reach out</Heading>
        <Text size={"md"}>
          <List spacing={2} p={5}>
            <ListItem>
              <ListIcon as={FaEnvelope} />
              fazmain25@wooster.edu
            </ListItem>
            <ListItem>
              <ListIcon as={FaPhone} />
              (330) 462 9568
            </ListItem>
            <ListItem>
              <ListIcon as={FaLinkedin} />
              www.linkedin.com/in/fazmain
            </ListItem>
            <ListItem>
              <ListIcon as={FaMap} />
              1189 Beall Avenue, Wooster, Ohio 44691
            </ListItem>
          </List>
        </Text>
      </Box>
    </SimpleGrid>
  );
}
