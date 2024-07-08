import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  Link,
  Divider,
  useToast,
} from '@chakra-ui/react';


import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';

import emailjs from '@emailjs/browser';
import { BsGithub, BsPerson, BsLinkedin } from 'react-icons/bs';
import { useState } from 'react';
export default function Contact() {

  let toast = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  let sendEmail = (e) => {
    e.preventDefault();
    console.log(formData, "form data");

    emailjs.send('service_v40b4rl', 'template_5zhh4ki', formData, 'd37Tq2_YNubBoYD1z')
      .then((result) => {
        console.log(result.text);

        if (result.text === "OK") {
          toast({
            title: 'Successfully Send the mail.',
            description: "I want to contact you soon on the email.",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })

          setFormData({
            name: '',
            email: '',
            message: ''
          });
        }
      }, (error) => {
        console.log(error.text);
        toast({
          title: 'Unable to Send.',
          description: error.text,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      });


  }


  return (
    <Box width={{ base: "95%", md: "90%" }} m="auto" mt={10} centerContent overflow="hidden" id="Contact"  >

      <Flex w="100%" >
        <Box w="100%"
          bg="red.400"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 8 }}>
          <Box p={4}>
            <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 5, md: 2, lg: 5 }} >

              <Box m='auto' textAlign='center' p={2} >
                <Box >
                  <Heading textAlign={"left"}> Contact </Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white.500" textAlign={"left"}>
                    Fill up the form to contact with me
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start" >
                      <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} gap={5}
                        size="md"
                        height="48px"
                        width="300px"
                        color="white"
                      >

                        <MdPhone color="yellow" size="20px" />
                        <Text>
                          +91-7906962819
                        </Text>
                      </Box>
                      <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} gap={5}
                        size="md"
                        height="48px"
                        width="300px"
                        color="white"
                      >
                        <MdEmail color="yellow" size="20px" />
                        <Text>
                          8192969855p@gmail.com
                        </Text>
                      </Box>
                      <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} gap={5}
                        size="md"
                        height="48px"
                        width="300px"
                        color="white"

                      >
                        <MdLocationOn color="yellow" size="20px" />
                        <Text>
                          Uttarakhand, India
                        </Text>
                      </Box>
                    </VStack>
                  </Box>

                  <Divider border={"2px solid yellow"} my={5} />
                  <HStack
                    mt={{ lg: 5, md: 3 }}
                    spacing={10}
                    w='50%'
                    margin='auto'
                  >

                    <Link href="https://www.linkedin.com/in/prakash-gariya-a7580a239/"
                      target={"_blank"}>
                      <IconButton
                        aria-label="linkdin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'yellow.400' }}
                        icon={<BsLinkedin size='28px' />}
                      />
                    </Link>

                    <Link href="https://github.com/pgariya" target={"_blank"} >
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'yellow.400' }}
                        icon={<BsGithub size="28px" />}
                      />
                    </Link>


                  </HStack>
                </Box>
              </Box>



              <Box w={{ base: "100%", md: "70%", lg: "50%" }}>
                <Box bg="white" borderRadius="lg" p={4}>
                  <Box m={8} color="#0B0E3F">
                    <form onSubmit={sendEmail}>
                      <VStack spacing={5}>
                        <FormControl id="name" isRequired>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              placeholder="Enter Your Full Name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="mail" isRequired>
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="email"
                              size="md"
                              placeholder="Enter Your Email ID"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="message" isRequired>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{ borderRadius: 'gray.300' }}
                            placeholder="Please Write a Message in Detail"
                            height={40}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="submit" float="right">
                          <Button
                            variant="solid"
                            bg="yellow.500"
                            color="white"
                            _hover={{}}
                            type="submit"
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </Box>



            </Stack>
          </Box>
        </Box>

      </Flex>

    </Box>
  );
}











