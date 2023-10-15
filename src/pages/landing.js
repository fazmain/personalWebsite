import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projectContent";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ProjectHeader from "../components/projectHeader";
import ProjectContent from "../components/projectContent";
import Blog from "../components/blog";

import { useBreakpointValue } from "@chakra-ui/react";

export default function LandingPage() {
  const mySize = useBreakpointValue({ base: "10%", md: "5%" });
  const mxSize = useBreakpointValue({ base: "8%", md: "15%" });

  return (
    <Box>
      <Header />
      <Box my={mySize} mx={mxSize}>
        <Hero />
        <About />
        <Skills />
        <ProjectHeader />
        <ProjectContent />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
