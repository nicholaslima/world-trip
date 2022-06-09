import type { GetStaticProps, NextPage } from "next";
import NextLink from "next/link";
import { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  Divider,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { Pagination, Navigation } from "swiper";
import { Header } from "../components/header";

import { SwiperElement } from "../components/Swiper/Index";

import { continentType, continentsPrev } from "../types";

interface HomeProps {
  continents: continentsPrev[];
}

const Home: NextPage<HomeProps> = ({ continents }: HomeProps) => {
  return (
    <Box>
      <Header></Header>

      <Flex bgSize="cover" h="335px" bgImage="imgs/Background.png">
        <Flex
          mx="auto"
          w="100%"
          maxWidth="980px"
          justify="space-between"
          align="center"
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
      </Flex>

      <HStack spacing="130px" mx="auto" maxWidth="980px" mt="80px" mb="80px">
        <Box>
          <Image
            src="imgs/cocktail.png"
            h="70px"
            alt="cocktail image"
            mx="auto"
            mb="20px"
          />
          <Text fontWeight="semibold">vida noturna</Text>
        </Box>

        <Box>
          <Image
            src="imgs/surf.png"
            h="70px"
            alt="surf image"
            mx="auto"
            mb="20px"
          />
          <Text fontWeight="semibold">praia</Text>
        </Box>

        <Box>
          <Image
            src="imgs/building.png"
            h="70px"
            alt="building image"
            mx="auto"
            mb="20px"
          />
          <Text fontWeight="semibold">moderno</Text>
        </Box>

        <Box>
          <Image
            src="imgs/museum.png"
            h="70px"
            alt="museum image"
            mx="auto"
            mb="20px"
          />
          <Text fontWeight="semibold">classico</Text>
        </Box>

        <Box>
          <Image
            src="imgs/earth 1.png"
            h="70px"
            alt="earth image"
            mx="auto"
            mb="20px"
          />
          <Text fontWeight="semibold">e mais...</Text>
        </Box>
      </HStack>

      <Divider
        w="90px"
        borderWidth="1px"
        borderColor="gray.dark"
        mx="auto"
      ></Divider>

      <Box mx="auto" maxWidth="980px">
        <Heading
          py="52px"
          w="550px"
          mx="auto"
          lineHeight="54px"
          fontWeight="medium"
          textAlign="center"
        >
          Vamos nessa?<br></br>
          Então escolha seu continente
        </Heading>
      </Box>

      <Flex
        mx="auto"
        maxWidth="980px"
        bgSize="cover"
        w="100%"
        h="450px"
        mb="40px"
        bgImage="imgs/ContinentImage.png"
      >
        <SwiperElement continents={continents} />
      </Flex>
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data: continentType[] = await fetch(
    "http://localhost:3333/continents"
  ).then((response) => response.json());

  const continentsNames: continentsPrev[] = data.map((item) => {
    return {
      name: item.continent,
      desc: item.descPrev,
      slug: item.slug,
    };
  });

  return { props: { continents: continentsNames } };
};
