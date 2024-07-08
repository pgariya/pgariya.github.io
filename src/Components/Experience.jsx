import React from 'react';
import { Box, Heading, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaCalendarAlt, FaTasks } from 'react-icons/fa';

const Experience = () => {
  return (
    <Box minH={"80vh"} width={{ base: "95%", md: "90%" }} m="auto"  p={4} bg="white" borderRadius="lg"  my={5} id='Experience'>
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={4} textAlign="left" color="red.400">
        My Experience
      </Heading>
      <VStack align="start" spacing={4} my={5} >

        <Box>
          <Heading as="h3" size="lg" color="#0B0E3F">
            Junior Web Developer
          </Heading>
          <HStack spacing={2} my={4}>
            <Icon as={FaMapMarkerAlt} color="gray.500" width={8} height={8}/>
            <Text color="gray.500">New Delhi, India</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaCalendarAlt} color="gray.500" width={8} height={8}/>
            <Text color="gray.500">April 2023 - Present</Text>
          </HStack>
          <Text mt={4} fontWeight="bold" color="#0B0E3F" fontSize={"20px"}>
          Teamcode Innovation Technology India Pvt. Ltd.
          </Text>
        </Box>

        <VStack align="start" spacing={2} mt={4}>
          <HStack align="center">
            <Icon as={FaTasks} color="yellow.500" width={8} height={8}/>
            <Text color="gray.800" >
              Developed full-stack web applications utilizing React and Nextjs for frontend, and Express.js and Node.js for backend, ensuring high performance and scalability.
            </Text>
          </HStack>
          <HStack align="center">
            <Icon as={FaTasks} color="yellow.500" width={8} height={8}/>
            <Text color="gray.800" >
              Designed responsive and visually appealing user interfaces using Chakra UI and Tailwind CSS, enhancing user experience and engagement.
            </Text>
          </HStack>
          <HStack align="center">
            <Icon as={FaTasks} color="yellow.500" width={8} height={8}/>
            <Text color="gray.800" >
              Implemented real-time communication features using Socket.IO, enabling instant messaging and data exchange functionalities within web applications, fostering enhanced user interaction and collaboration.
            </Text>
          </HStack>
          <HStack align="center">
            <Icon as={FaTasks} color="yellow.500" width={8} height={8}/>
            <Text color="gray.800" >
              Managed AWS S3 bucket integration for efficient storage and retrieval of multimedia content within web applications, ensuring secure and scalable data storage solutions.
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Experience;
