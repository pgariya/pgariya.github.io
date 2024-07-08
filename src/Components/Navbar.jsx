import {
  Heading,
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {IoMdDownload} from "react-icons/io"

import { Link } from "react-scroll";

const Links = ["About", "Skills", "Projects"];

const NavLink = ({ children }) => (
  <Link
    style={{ cursor: "pointer" }}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    activeClass="active"
    to={children}
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

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

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        w={"100%"}
        position={"fixed"}
        style={{ zIndex: "999" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
           


              <Box  display={{ base: "none", md: "flex" }}>
                <Link
                  style={{ cursor: "pointer" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  activeClass="active"
                  to={"About"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  display="flex"
                >

                  <Box display={"flex"} px={10}>
                  <img src="https://w7.pngwing.com/pngs/161/658/png-transparent-blue-p-logo-paypal-logo-computer-icons-payment-system-paypal-blue-angle-service.png" alt="logo" style={{height:"25px"}}/>
                  <Heading size={"md"}> PRAKASH </Heading>
                  </Box>

                </Link>
              </Box>
            


            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
              fontWeight="bold"
              fontSize={"20px"}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={5}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Button
              bg={"red.400"}
              color={"white"}
              _hover={{
                bg: "red.500",
              }}
            >
              <Link
                style={{ cursor: "pointer" }}
                px={2}
                py={1}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                activeClass="active"
                to={"Contact"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
            </Button>

            {/* resume Download button */}
            <Button
              display={{ base: "none", lg: "flex" }}
              bg={"red.400"}
              size="md"
              color={"white"}
              _hover={{
                bg: "red.500",
              }}
              onClick={handleResume}
              my={"20px"}
            >
              My Resume <IoMdDownload/>
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://i.postimg.cc/ydgw9vQZ/profile.jpg"}
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} h={"100vh"}>
            <Stack as={"nav"} gap={4} justifyContent={"space-between"} mt={5}>

              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
        

<Button
    // display={{ base: "none", lg: "flex" }}
    bg={"red.400"}
    // w="30%"
    size="md"
    color={"white"}
    _hover={{
      bg: "red.500",
    }}
    onClick={handleResume}
    my={"20px"}
  >
    My Resume <IoMdDownload/>
  </Button>





            </Stack>
          </Box>
        ) : null}



      </Box>
    </>
  );
}
