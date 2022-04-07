import type { NextPage } from "next";
import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box w="100%" maxWidth="1440px">
      <Flex w="100%" height="100px" align="center" justify="center">
        <Image src="imgs/Logo.png" alt="world trip logotipo" />
      </Flex>

      <Flex
        justify="space-around"
        align="center"
        bgSize="cover"
        h="335px"
        bgImage="imgs/Background.png"
      >
        <Box maxWidth="524px">
          <Heading
            color="white.light"
            lineHeight="54px"
            fontWeight="550"
            fontSize="36px"
          >
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text
            color="gray.light"
            fontWeight="normal"
            fontSize="20px"
            mt="20px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          position="relative"
          bottom="-60px"
          h="270px"
          src="imgs/Airplane.png"
          alt="avião"
        />
      </Flex>
    </Box>
  );
};

export default Home;
