import React from "react";
import { Heading, Box, Code } from "@chakra-ui/react";

export default function ProjectHeader() {
  return (
    <>
      <Heading>// products// projects// case studies</Heading>
      <Box align="right">
        <Code
          bgColor="purple.400"
          textColor={"white"}
          px={3}
          fontSize={"md"}
          fontWeight="bold"
        >
          & more
        </Code>
      </Box>
    </>
  );
}
