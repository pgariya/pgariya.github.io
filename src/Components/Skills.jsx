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


import { FaReact, FaGithub, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiRedux,
  SiExpress,
  SiPostman,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";

import { DiJavascript1, DiMongodb, DiNodejsSmall } from "react-icons/di";

import { TbBrandNextjs } from "react-icons/tb"

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"} gap={2}>
      <Flex
        w={{ base: 8, md: 12, lg: 16 }}
        h={{ base: 8, md: 12, lg: 16 }}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize={{ base: "16px", lg: "18px" }}>{text}</Text>
    </Stack>
  );
};

export default function Skills() {
  return (
    <Box width={{ base: "95%", md: "90%" }} m="auto" id="Skills">


      <Stack spacing={4} p={5} w="100%" >
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

        <Box display={"grid"} gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }} gap={{ base: 10, md: 15, lg: 20 }} pt={5} >

          {/* 1st  */}
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
                icon={<Icon as={SiHtml5} color={"red.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />}
                iconBg={useColorModeValue("red.100", "red.900")}
                text={"HTML 5"}
              />
              <Feature
                icon={<Icon as={SiCss3} color={"red.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />}
                iconBg={useColorModeValue("red.100", "red.900")}
                text={"CSS 3"}
              />
              <Feature
                icon={
                  <Icon as={DiJavascript1} color={"red.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />
                }
                iconBg={useColorModeValue("red.100", "red.900")}
                text={"JavaScript"}
              />
              <Feature
                icon={
                  <Icon as={SiTypescript} color={"red.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />
                }
                iconBg={useColorModeValue("red.100", "red.900")}
                text={"TypeScript"}
              />


            </Stack>
          </Box>

          {/* 2nd  */}
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
                icon={<Icon as={FaReact} color={"yellow.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"React Js"}
              />

              <Feature
                icon={<Icon as={TbBrandNextjs} color={"yellow.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Next Js"}
              />

              <Feature
                icon={<Icon as={SiRedux} color={"yellow.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Redux"}
              />

              <Feature
                icon={<Icon as={SiChakraui} color={"yellow.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Chakra UI"}
              />

            </Stack>
          </Box>


          {/* 3rd  */}
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
                icon={
                  <Icon as={DiNodejsSmall} color={"blue.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />
                }
                iconBg={useColorModeValue("blue.100", "blue.900")}
                text={"Node JS"}
              />



              <Feature
                icon={<Icon as={SiExpress} color={"yellblueow.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />}
                iconBg={useColorModeValue("blue.100", "blue.900")}
                text={"Express JS"}
              />


              <Feature
                icon={
                  <Icon as={DiMongodb} color={"blue.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />
                }
                iconBg={useColorModeValue("blue.100", "blue.900")}
                text={"Mongodb"}
              />


              <Feature
                icon={<Icon as={FaGithub} color={"blue.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />}
                iconBg={useColorModeValue("blue.100", "blue.900")}
                text={"Git & Github"}
              />

            </Stack>
          </Box>

          {/* 4th  */}
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
                icon={<Icon as={FaAws} color={"green.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"AWS"}
              />

              <Feature
                icon={<Icon as={SiSocketdotio} color={"green.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Sockets"}
              />

              <Feature
                icon={<Icon as={SiTailwindcss} color={"green.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Tailwind CSS"}
              />

              <Feature
                icon={<Icon as={SiPostman} color={"green.500"} w={{ base: 5, md: 7, lg: 9 }} h={{ base: 5, md: 7, lg: 9 }} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Postman"}
              />

            </Stack>
          </Box>

        </Box>
      </Stack>



    </Box>
  );
}
