import React from "react";
import {
  Box,
  HStack,
  Spacer,
  Icon,
  Heading,
  Button,
  ButtonGroup,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Code,
} from "@chakra-ui/react";

import { FaLinkedin, FaEnvelope, FaGithub, FaBars } from "react-icons/fa6";

import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Box p={10} bg="white.500">
      <HStack>
        <Heading size={"lg"}>faiaz // azmain</Heading>
        <Spacer />
        <Box>
          {isLargeScreen ? (
            <ButtonGroup spacing={"3"}>
              <Button size="sm" colorScheme="purple" variant="outline">
                <RouterLink to="/">
                  <Heading size={"xs"}>// home</Heading>
                </RouterLink>
              </Button>

              <Button size="sm" colorScheme="purple" variant="outline">
                <RouterLink to="/projects">
                  <Heading size={"xs"}>// projects</Heading>
                </RouterLink>
              </Button>
              <Button
                size="sm"
                colorScheme="purple"
                variant="outline"
                isDisabled
              >
                <RouterLink to="/">
                  <Heading size={"xs"}>// blog</Heading>
                </RouterLink>
              </Button>
              <RouterLink to="https://www.linkedin.com/in/faiazmain/">
                <Icon as={FaLinkedin} w={10} h={8} color="purple.500" />
              </RouterLink>
              <RouterLink to="mailto:fazmain25@wooster.edu">
                <Icon as={FaEnvelope} w={10} h={8} color="purple.500" />
              </RouterLink>
              <RouterLink to="https://github.com/fazmain">
                <Icon as={FaGithub} w={10} h={8} color="purple.500" />
              </RouterLink>
            </ButtonGroup>
          ) : (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FaBars />}
                size="lg"
                variant="outline"
                colorScheme="purple"
              />
              <MenuList>
                <MenuItem>
                  <RouterLink to="/">
                    <Code color="purple.500" fontWeight={"bold"}>
                      // home
                    </Code>
                  </RouterLink>
                </MenuItem>
                <MenuItem>
                  <RouterLink to="/">
                    <Code color="purple.500" fontWeight={"bold"}>
                      // blog
                    </Code>
                  </RouterLink>
                </MenuItem>
                <MenuItem>
                  <RouterLink to="/projects">
                    <Code color="purple.500" fontWeight={"bold"}>
                      // projects
                    </Code>
                  </RouterLink>
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;
