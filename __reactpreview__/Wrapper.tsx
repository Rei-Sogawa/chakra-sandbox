import { ChakraProvider, Center } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type WrapperProps = VFC<{ children: ReactNode }>;

export const Wrapper: WrapperProps = ({ children }) => {
  return (
    <ChakraProvider>
      <Center minH="100vh" p="4">
        {children}
      </Center>
    </ChakraProvider>
  );
};
