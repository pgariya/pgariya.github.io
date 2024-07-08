import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Link,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io"
import Typed from "react-typed";

export default function About() {

  const handleResume = () => {
    window.open(`https://drive.google.com/file/d/1sbnAjgI8YklGvFK1d_tqUpUyVpOP4zLG/view?usp=sharing`)

    fetch("/fw20_0720_Prakash-Gariya-Resume.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        // create an object for the file.
        let file = document.createElement("a");
        file.href = fileUrl;
        file.download = "/fw20_0720_Prakash-Gariya-Resume.pdf";
        file.click();
      });
    });
  };


  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack  width={{base: "95%" , md : "90%"}} m="auto" id="About"
      minH={"100vh"} pt={10}
      direction={{ base: "column", md: "row" }}
    >
      <Flex py={8} flex={1} align={"center"} justify={"center"} >
        <Stack spacing={6} w={"full"} maxW={"xl"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                // height: useBreakpointValue({ base: "20%", md: "30%" }),
                // position: "absolute",
                // bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Hi, I Am
            </Text>
            <br />
            <Text color={"red.400"} as={"span"}>
              <Typed
                strings={[
                  "Prakash Gariya",
                  "A Full-Stack Developer",
                  "A Tech-Enthusiast",

                ]}
                typeSpeed={100}
                backSpeed={100}
                loop
              ></Typed>
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Motivated and innovative full-stack web developer with one year of hands-on experience building websites using the MERN stack and various web technologies, including HTML, CSS, and JavaScript. Proven ability to learn and adapt to emerging web technologies and deliver high-quality web solutions.

            {/* Looking
forward to making a significant contribution to an organization
through dedicated effort. */}
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              bg={"red.400"}
              color={"white"}
              className="myresumebutton"
              _hover={{
                bg: "red.500",
              }}
              onClick={handleResume}
              display="flex"
            >

              My Resume <IoMdDownload />

            </Button>
            <Button >
              <Link
                style={{ textDecoration: "none" }}
                target={"_blank"}
                href="https://github.com/pgariya?tab=repositories"
              >
                My Projects
              </Link>
            </Button>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button>
              <Link
                href="https://www.linkedin.com/in/prakash-gariya-a7580a239/"
                target={"_blank"}
              >
                <BsLinkedin />
              </Link>
            </Button>

            <Button>
              <Link href="https://github.com/pgariya" target={"_blank"}>
                <BsGithub />
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>

      <Flex flex={1} alignItems="center" justifyContent={"center"}>

        <Image
          borderRadius={50}
          objectFit={"cover"}
          className="zoom"
          width={["xs", "md"]}
          height={["xs", "md"]}
          src={
            "https://i.postimg.cc/c44WQmP3/prof2.jpg"
          }
        />


      </Flex>

    </Stack>
  );
}
