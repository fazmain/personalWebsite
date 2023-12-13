import React from "react";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Image,
  HStack,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import feastfinder from "../../assets/feastfinder.png";
import feastfinder1 from "../../assets/feastfinder1.png";
import feastfinder2 from "../../assets/feastfinder2.png";
import logo from "../../assets/feastfinder_logo.png";

import Header from "../../components/header";
import Footer from "../../components/footer";

const FeastFinder = () => {
  return (
    <>
      <Header />
      <Box p={10} shadow="md" borderWidth="1px" flex="1" borderRadius="md" mx = {"10%"} my = {"3%"}>
        <HStack>
          <Box>
            <Image src={logo} maxW={"15%"} my={3} />
            <Heading fontSize="3xl">
              FeastFinder: Revolutionizing the Restaurant Search Experience
            </Heading>

            <Heading fontSize="xl" mt={6}>
              Introduction
            </Heading>
            <Text mt={4}>
              FeastFinder is a restaurant search platform that recommends
              restaurants and menu items based on your natural language queries.
              It is like “Google for restaurants”.
            </Text>
          </Box>
          <Image
            src={feastfinder}
            borderRadius="lg"
            border={"1px"}
            borderColor={"gray.400"}
            maxW={"50%"}
            m={5}
          />
        </HStack>

        <Heading fontSize="xl" mt={6}>
          Background and Motivation
        </Heading>
        <Text mt={2}>
          It started when I had to find a restaurant for my birthday bash in my
          area. I could google nearby restaurants, and see reviews and most of
          their menus. However, as some restaurants don’t allow celebrating
          birthdays on premises, I was clueless if the restaurants were a good
          match or not. Also, it was a hectic task to go through the menu and
          find something in my budget for my friend group.
        </Text>
        <Text mt={2}>
          I talked with my friends and family, only to validate the problem
          more. They also face these problems:
          <List mt={2}>
            <ListItem>
              - They don’t know if the restaurant is a good place for their
              occasion
            </ListItem>
            <ListItem>
              - Searching through the menu for the perfect item at the perfect
              price point is a hectic process
            </ListItem>
          </List>
        </Text>

        <Heading fontSize="xl" mt={6}>
          User Stories
        </Heading>
        <List spacing={2} mt={2}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            As a user who wants personalized recommendations, I want the system
            to consider my location, budget, and occasion or events to provide
            relevant restaurant and menu suggestions.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            As a user who enjoys discovering new restaurants, I want to be able
            to explore and find dining options that align with my taste
            preferences.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            As a user who wants to eat a certain type of food, I want to be able
            to explore menu items in the restaurant that match my preferences.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            As a user with specific dietary restrictions, I want to be able to
            input my preferences (e.g., vegetarian, gluten-free) to find
            restaurants that cater to my needs.
          </ListItem>
        </List>

        <Heading fontSize="xl" mt={6}>
          Planning, Design, and Wireframe
        </Heading>
        <Text mt={2}>
          The first step was to create a rough wireframe. Taking inspiration
          from popular search engines, the design was kept relatively simple:
          <List mt={2}>
            <ListItem>- A heading text for a brief introduction</ListItem>
            <ListItem>
              - A simple search bar in the center for the queries
            </ListItem>
            <ListItem>- Display of results following the search bar</ListItem>
          </List>
        </Text>
        <HStack>
          <Image
            src={feastfinder1}
            borderRadius="lg"
            border={"1px"}
            borderColor={"gray.400"}
            maxW={"50%"}
            m={5}
          />
          <Image
            src={feastfinder2}
            borderRadius="lg"
            border={"1px"}
            borderColor={"gray.400"}
            maxW={"20%"}
            m={5}
          />
        </HStack>
        <Text mt={2}>
          <b>Design choices made to improve UI:</b>
          <List mt={2}>
            <ListItem>
              - Informational Cards: The cards provide information to clarify
              the query interpretation, making it easy for the user to learn and
              update the query
            </ListItem>
            <ListItem>
              - Guided Search Bar: The guided input field in the search bar
              shows sample queries for the user to assist with fluent user
              interaction.
            </ListItem>
          </List>
        </Text>

        <Heading fontSize="xl" mt={6}>
          Development
        </Heading>
        <Text mt={2}>
          <b>Tech Stack:</b> The development utilized a robust combination of
          React.js for the front end, Firebase for database management, and
          Node.js with Express.js for backend operations.
        </Text>
        <Text mt={2}>
          <b>Database Structure:</b> A flexible NoSQL database architecture was
          employed, accommodating the diverse range of restaurant menus and
          attributes through unique identifiers and descriptive tags. The
          variability inherent in restaurant data made NoSQL an ideal choice.
        </Text>
        <Text mt={2}>
          <b>Design Choices:</b>
          <List mt={2}>
            <ListItem>
              - The front end is responsible for interpreting user queries and
              presenting results.
            </ListItem>
            <ListItem>
              - The backend manages request processing, creating database filter
              objects using the OpenAI API, and transmitting them to the client.
            </ListItem>
            <ListItem>
              - Database queries are executed client-side, optimizing backend
              efficiency and offering flexibility for future updates to data
              management and storage.
            </ListItem>
          </List>
        </Text>

        <Heading fontSize="xl" mt={6}>
          Future Plans and Improvements
        </Heading>
        <Text mt={2}>
          In future versions of the product, potential features include:
          <List mt={2}>
            <ListItem>
              - <b>Enhanced Filtering:</b> Introducing additional parameters to
              refine restaurant searches further, thereby improving the accuracy
              and relevance of results.
            </ListItem>
            <ListItem>
              - <b>User Reviews Integration:</b> Incorporating user-generated
              reviews and ratings to provide real-world insights into dining
              experiences.
            </ListItem>
            <ListItem>
              - <b>Partnerships with Local Restaurants:</b> Establishing
              collaborations with local dining establishments to offer exclusive
              deals and insights, enriching the user experience.
            </ListItem>
            <ListItem>
              - <b>Community Features:</b> Creating a platform for food
              enthusiasts to share experiences, tips, and favorite dining spots,
              fostering a community of like-minded individuals.
            </ListItem>
          </List>
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default FeastFinder;
