import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  Grid,
  GridItem,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";

import Card from "./Card";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const Projects = () => {
  return (
    <Box  width={{ base: "95%", md: "90%" }} p={5} m="auto" id="Projects">
      {/* // project section..... */}

      <Heading as="h2" marginTop="5" marginBottom={5} >
        My Projects
      </Heading>

      {/* <Divider marginTop="5" /> */}

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={"10"}
      >
        
        {/* 1st Project  */}
        <GridItem >
          <Card
            img={"/PROJECT-NEM.png"}
            tag={["Collaborative"]}
            tsTags={[
              "CSS",
              "React",
              "Redux",
              "Chakra-Ui",
              "JavaScript",
              "ES-6",
              "Node JS",
              "Mongo DB",

            ]}
            heading={"Stylux Website"}
            content={
              "Stylux is E-commerce website specialized in online retailing of men's and women's garments and accessories and this is clone of yepme website "
            }
            deploy={"https://styluxe.vercel.app/"}
            git={
              "https://github.com/pgariya/remarkable-veil-524"
            }
          />
        </GridItem>

{/* 2nd project  */}
        <GridItem >
          <Card
            img={"/ProjectImage2.png"}
            tag={["Collaborative"]}
            tsTags={[
              "CSS",
              "React",
              "Redux",
              "Chakra-Ui",
              "JavaScript",
              "ES-6",
              "React-slick",
              "AOS LIbrary",

            ]}
            heading={"IKEA Cloned Website "}
            content={
              "IKEA's website is the online store for the well-known Swedish furniture retailer.It offers furniture, home decor, and accessories."
            }
            deploy={"https://rococo-sawine-4218f1.netlify.app/"}
            git={
              "https://github.com/pgariya/fleet-purpose-8648"
            }
          />
        </GridItem>

        <GridItem>
          <Card
            img={"/proo3.png"}
            tag={["Collaborative"]}
            tsTags={[
              "HTML",
              "CSS",
              "React-Js",
              "Redux",
              "Chakra-Ui",
              "JavaScript",
              "ES-6",
              "LocalStorage",
              "api",
            ]}
            heading={"Fitnesshub Website "}
            content={
              "Fitnesshub is the most accurate, comprehensive nutrition tracking app. It is clone website of cronometer.com."
            }
            deploy={"https://projectfitnesshub.netlify.app/"}
            git={"https://github.com/srinetanuj/hissing-wrench-7979"}
          />
        </GridItem>

        {/* // other 2 project */}
        <GridItem>
          <Card
            img={"/proooo2.png"}
            tag={["Collaborative"]}
            tsTags={[
              "HTML",
              "CSS",
              "Javascript",
              "api",
              "fetch",
              "Local Storage",
              "JSON-Server",
              "React-Slider",
            ]}
            heading={"Toggle Track Clone"}
            content={
              "A Website to Manage your time . Simple time tracking website to save your time and money"
            }
            deploy={"https://keen-alfajores-eae4c6.netlify.app/"}
            git={
              "https://github.com/YashSharma7746/Project/tree/main/Final/Project"
            }
          />
        </GridItem>

       
      </Grid>
    </Box>
  );
};

export default Projects;
