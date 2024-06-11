import { useState } from "react";
import { Container, VStack, HStack, Button, Box, Text, StackDivider, Heading, Flex } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Product Manager", category: "Product" },
  { id: 2, title: "UX Designer", category: "Design" },
  { id: 3, title: "Frontend Engineer", category: "Engineering" },
  { id: 4, title: "Backend Engineer", category: "Engineering" },
  { id: 5, title: "Product Designer", category: "Design" },
];

const Index = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.category === filter);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} w="full">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Remote Tech Jobs</Heading>
          <Text fontSize="lg" color="gray.600">Find your next remote job in tech. Filter by category to find the perfect match for you.</Text>
        </Box>
        <HStack spacing={4}>
          <Button onClick={() => setFilter("All")} colorScheme={filter === "All" ? "blue" : "gray"}>All</Button>
          <Button onClick={() => setFilter("Product")} colorScheme={filter === "Product" ? "blue" : "gray"}>Product</Button>
          <Button onClick={() => setFilter("Design")} colorScheme={filter === "Design" ? "blue" : "gray"}>Design</Button>
          <Button onClick={() => setFilter("Engineering")} colorScheme={filter === "Engineering" ? "blue" : "gray"}>Engineering</Button>
        </HStack>
        <VStack spacing={4} divider={<StackDivider borderColor="gray.200" />} w="full">
          {filteredJobs.map(job => (
            <Box key={job.id} p={4} borderWidth="1px" borderRadius="lg" w="full" bg="white" boxShadow="md">
              <Text fontSize="xl" fontWeight="bold">{job.title}</Text>
              <Text fontSize="sm" color="gray.500">{job.category}</Text>
            </Box>
          ))}
        </VStack>
        <Flex as="footer" w="full" py={4} justifyContent="center" borderTopWidth="1px" borderColor="gray.200">
          <Text fontSize="sm" color="gray.500">© 2023 Remote Tech Jobs. All rights reserved.</Text>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;