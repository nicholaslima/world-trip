import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w="100%"
      maxWidth="980px"
      mx="auto"
      height="100px"
      align="center"
      justify="center"
    >
      <Image src="imgs/Logo.png" alt="world trip logotipo" />
    </Flex>
  );
}
