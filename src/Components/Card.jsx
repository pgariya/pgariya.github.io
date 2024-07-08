import {
  Box,
  Center,
  Image,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Tag,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const BlogTags = (props) => {
  return (
    <Flex flexWrap={"wrap"} gap={2} spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="red"
            _hover={{ bgColor: "red.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
};

const TechStackTags = (props) => {
  return (
    <Flex flexWrap={"wrap"} gap={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="yellow"
            _hover={{ bgColor: "yellow.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
};

export default function Card({
  img,
  tag,
  heading,
  content,
  deploy,
  git,
  tsTags,
}) {
  return (
    <Center py={6}>
      <Box 
        // maxW={"450px"}
        w={"full"}
        // h={["xl", "xl"]}
        // h={{base:"580px" , md:"650px" , lg : "570px"}}

        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        >
        <Box 
        // className="cardZoom"
          h={["250px", "350px"]}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
         
        >
          <Image src={img} layout={"fill"} w="100%" h="100%" />
        </Box>

        <Stack pt="1"  >
          <BlogTags tags={tag} />
          <TechStackTags tags={tsTags} />
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {heading}
          </Heading>
          <Text color={"gray.500"}>{content}</Text>
        </Stack>


        <Stack direction={"row"} pt={5}  >
          <Button
            bg={"red.400"}
            size={"sm"}
            // rounded={"full"}
            color={"white"}
            _hover={{ bg: "red.500" }}
            rightIcon={<BsGithub />}
          >
            <Link
              _hover={{ textDecoration: "none" }}
              target={"_blank"}
              href={git}
            >
              Github
            </Link>
          </Button>
          <Button
            bg={"red.400"}
            size={"sm"}
            // rounded={"full"}
            color={"white"}
            _hover={{ bg: "red.500" }}
            rightIcon={<BsLink45Deg />}
          >
            <Link
              _hover={{ textDecoration: "none" }}
              target={"_blank"}
              href={deploy}
            >
              Deployment
            </Link>
          </Button>
        </Stack>


      </Box>
    </Center>
  );
}
