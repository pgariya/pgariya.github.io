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
    <Container maxW={"7xl"} p="12" id="Projects">
      {/* // project section..... */}
      <Heading as="h2" marginTop="5">
        My Projects
      </Heading>

      <Divider marginTop="5" />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={"4"}
      >
        <GridItem>
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
            heading={"YEPME Cloned Website "}
            content={
              "Stylux is E-commerce website specialized in online retailing of men's and women's garments and accessories and this is clone of yepme website. "
            }
            deploy={"https://styluxe.vercel.app/"}
            git={
              "https://github.com/pgariya/remarkable-veil-524"
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
            heading={"Cronometer Cloned Website "}
            content={
              "Cronometer is the most accurate, comprehensive nutrition tracking app on earth. "
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
              "api",
              "fetch",
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

        <GridItem>
          <Card
            img={"/pro111.png"}
            tag={["Individual"]}
            tsTags={[
              "HTML",
              "CSS",
              "React-Js",
              "Redux",
              "Chakra-Ui",
              "JavaScript",
              "ES-6",
              "LocalStorage",
              "React",
            ]}
            heading={"TRIPOTO Cloned Website "}
            content={
              "One of the best Website to Plan to Road Trips and Vacations "
            }
            deploy={"https://candid-heliotrope-ab3c63.netlify.app/"}
            git={
              "https://github.com/pgariya/unable-stop-3158/tree/main/tripotoapp"
            }
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Projects;
