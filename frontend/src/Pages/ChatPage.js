import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  Menu,
  useColorModeValue,
  Text,
  Input,
  Spacer,
  Container,
} from "@chakra-ui/react";
import Chats  from "../components/Chats.js";

export default function ChatPage() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Input
              type={"text"}
              placeholder={"Search User"}
              color={useColorModeValue("gray.800", "gray.200")}
              bg={useColorModeValue("gray.100", "gray.600")}
              rounded={"full"}
              outline={"solid"}
              border={0}
              _focus={{
                bg: useColorModeValue("gray.200", "gray.800"),
                outline: "black",
              }}
            />
            <Box>
              <Text fontSize="4xl" fontFamily="Roboto">
                Jarvis
              </Text>
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <Box size={"sm"}>Name</Box>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      <Chats />
    </>
  );
}
