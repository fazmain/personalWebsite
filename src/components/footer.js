import React from "react";
import { Box, Text, Link, Center } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" p={4} mt="10%">
      <Center>
        <Text fontSize="sm">
          © {new Date().getFullYear()}, Built by Faiaz using React and ChakraUI. All rights reserved.
        </Text>
      </Center>
    </Box>
  );
};


export default Footer;
