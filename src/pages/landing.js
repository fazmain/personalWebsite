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

export default function LandingPage() {
  return (
    <Box>
      <Header />
      <Box my={["10%", "10%", "5%"]} mx={["8%", "8%", "15%"]}>
        <Hero />
        <About />
        <Skills />
        <ProjectHeader/>
        <ProjectContent />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
