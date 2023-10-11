import React from "react";
import { Box, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import FeastFinderImg from "../../assets/feast_finder.png";

const project = {
  image: FeastFinderImg,
  title: "FeastFinder",
  tags: ["React", "Firebase", "Chakra UI"],
  description: "Restaurant recommendations based on Natural Language queries!",
  content:
    "Lorem ipsum les dolores lola hoga, Lorem ipsum les dolores lola hoga Lorem ipsum les dolores lola hoga Lorem ipsum les dolores lola hoga Lorem ipsum les dolores lola hoga",
  bodyImages: [FeastFinder, FeastFinder, FeastFinder],
};

export default function FeastFinder() {
  return (
    <>
      <Header />
      <Box my={["10%", "10%", "5%"]} mx={["8%", "8%", "15%"]}>
        <Heading size="2xl" py={3}>
          {project.title}
        </Heading>
        <Text mb="2rem" fontSize={"lg"} fontWeight={"bold"}>
          {project.description}
        </Text>
        <SimpleGrid columns={[1, 1, 2]} spacing={7} my={10}>
          <Box>{project.content}</Box>
          <Image
            src={project.image}
            alt={project.title}
            mb="1rem"
            borderRadius="md"
            border="1px"
          />
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}
