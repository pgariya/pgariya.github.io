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


import { FaReact,  FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiRedux,
  SiExpress,
} from "react-icons/si";

import { DiJavascript1, DiMongodb, DiNodejsSmall } from "react-icons/di";

import {TbBrandNextjs} from "react-icons/tb"

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
    <Container maxW={"5xl"}  id="Skills"  >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}  w={{base: "95%", md:"100%"}} margin="auto">

        <Stack spacing={4} p={5} w="100%">
          <Text
            textTransform={"uppercase"}
            color={"red.400"}
            fontWeight={650}
            fontSize={"lg"}
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
                <Feature
                  icon={
                    <Icon as={DiMongodb} color={"red.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("red.100", "red.900")}
                  text={"Mongodb"}
                />

<Feature
                  icon={
                    <Icon as={DiNodejsSmall} color={"red.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("red.100", "red.900")}
                  text={"Node JS"}
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
              
              <Feature
                  icon={<Icon as={SiExpress} color={"yellow.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Express"}
                />
                <Feature
                  icon={<Icon as={TbBrandNextjs} color={"yellow.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Next Js"}
                />

              </Stack>
            </Box>
          </Flex>
        </Stack>


        <Flex >
          <Image 
            // rounded={"md"}
            w={{base:"100%" , md:"100%"}}
            h={{base:"350px" , md:"100%"}}
            margin="auto"
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80"
            }

            objectFit={"cover"}
            
          />
        </Flex>

      </SimpleGrid>
    </Container>
  );
}
