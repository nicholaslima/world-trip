import { Flex, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
export function Header() {
  return (
    <Flex
      w="100%"
      maxWidth="980px"
      mx="auto"
      py={["0.6rem", "0.9rem", "1.2rem", "1.7rem"]}
      align="center"
      justify="center"
    >
      <NextLink href="/" passHref>
        <ChakraLink _hover={{ textDecoration: "none" }}>
          <Image
            src="imgs/Logo.png"
            h={["10px", "22px", "30px", "35px", "40px"]}
            alt="world trip logotipo"
          />
        </ChakraLink>
      </NextLink>
    </Flex>
  );
}
