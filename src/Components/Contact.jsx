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
} from '@chakra-ui/react';


import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';


import { BsGithub,  BsPerson, BsLinkedin } from 'react-icons/bs';

export default function Contact() {

  return (
    <Container maxW="full" mt={10} centerContent overflow="hidden" id="Contact" >
<Flex>
        <Box
          bg="red.400"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 12 }}>
          <Box p={4}>
            <Stack direction={{base:'column', md: 'row'}} gap={10}>

              <Box m='auto' textAlign='center'>
                <Box >
                  <Heading> Contact </Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid yellow' }}
                        leftIcon={<MdPhone color="yellow" size="20px" />}>
                        +91-7906962819
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid yellow' }}
                        leftIcon={<MdEmail color="yellow" size="20px" />}>
                        8192969855p@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid yellow' }}
                        leftIcon={<MdLocationOn color="yellow" size="20px" />}>
                        Uttarakhand, India
                      </Button>
                    </VStack>
                  </Box>

                  <HStack
                    mt={{ lg: 5, md: 3 }}
                    spacing={10}
                    // ml={15}
                    w='50%'
                    margin='auto'
                    // border='2px solid'
                   >
                      
                   <Link  href="https://www.linkedin.com/in/prakash-gariya-a7580a239/"
                target={"_blank"}>
                   <IconButton
                      aria-label="linkdin"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'yellow.400' }}
                      icon={<BsLinkedin  size='28px'/>}
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



              <Box >
                <Box bg="white" borderRadius="lg" p={5}>
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md"  placeholder='Your Name'/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md"  placeholder='Your Name'/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="yellow.500"
                          color="white"
                          _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </Box>


            </Stack>
          </Box>
        </Box>

      </Flex>
      
    </Container>
  );
}











