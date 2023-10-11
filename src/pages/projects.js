import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";
import ProjectContent from "../components/projectContent";

export default function ProjectPage() {
  return (
    <>
      <Header />
      <Box my={["10%", "10%", "5%"]} mx={["8%", "8%", "15%"]}>
        <Heading size="4xl" py={3}>
          // products // projects // case studies
        </Heading>
        <ProjectContent />
      </Box>
      <Footer />
    </>
  );
}
