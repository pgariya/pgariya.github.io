import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";

import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiRedux,
} from "react-icons/si";

import { DiJavascript1 } from "react-icons/di";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Skills() {
  return (
    <Container maxW={"5xl"} py={12} id="Skills">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"red.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("red.50", "red.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            My Skills
          </Text>
          <Heading>I Persist the Following Skills </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Mentioned below are the skillsets which I possess .
          </Text>
          <Flex gap={10}>
            <Box>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
                <Feature
                  icon={<Icon as={SiHtml5} color={"red.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("red.100", "red.900")}
                  text={"HTML 5"}
                />
                <Feature
                  icon={<Icon as={SiCss3} color={"red.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("red.100", "red.900")}
                  text={"CSS 3"}
                />
                <Feature
                  icon={
                    <Icon as={DiJavascript1} color={"red.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("red.100", "red.900")}
                  text={"JavaScript"}
                />
                 <Feature
                  icon={
                    <Icon as={SiTypescript} color={"red.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("red.100", "red.900")}
                  text={"TypeScript"}
                />
                
               
              </Stack>
            </Box>
            <Box>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >

            <Feature
                  icon={<Icon as={FaReact} color={"yellow.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"React Js"}
                />
                
                <Feature
                  icon={<Icon as={SiRedux} color={"yellow.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Redux"}
                />

           <Feature
                  icon={<Icon as={SiChakraui} color={"yellow.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Chakra UI"}
                />


                <Feature
                  icon={<Icon as={FaGithub} color={"yellow.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Git & Github"}
                />
              
              </Stack>
            </Box>
          </Flex>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://vdc.edu.au/wp-content/uploads/2018/04/Image-Article-2-1024x705.jpg"
            }
            objectFit={"cover"}
            
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
