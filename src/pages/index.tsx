import type { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  Divider,
  Link,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { Header } from "../components/header";

import { createServer, Model } from "miragejs";
import { SwiperElement } from "../components/Swiper/Index";

createServer({
  models: {
    continents: Model,
  },

  seeds(server) {
    server.db.loadData({
      continents: [
        {
          name: "Europa",
          prev: "o continente mais antigo",
          paises_qtd: "35",
          linguas_qtd: "4",
          cidades_qtd: "25",
          description:
            "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        },
        {
          name: "America do sul",
          prev: "Apresenta paisagens naturais muito diversas.",
          paises_qtd: "12",
          linguas_qtd: "4",
          cidades_qtd: "25",
          description:
            "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        },
        {
          name: "América do Norte",
          prev: "possui grandes cordilheiras e Montanhas Rochosas.",
          paises_qtd: "35",
          linguas_qtd: "25",
          cidades_qtd: "25",
          description:
            "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        },
        {
          name: "Africa",
          prev: "continente de maior biodiversidade do mundo",
          paises_qtd: "35",
          linguas_qtd: "25",
          cidades_qtd: "25",
          description:
            "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        },
        {
          name: "Oceania",
          prev: "vários grupos de ilhas do oceano Pacífico.",
          paises_qtd: "35",
          linguas_qtd: "25",
          cidades_qtd: "25",
          description:
            "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        },
        {
          name: "Ásia",
          prev: "multicultural, abrigando diversas culturas.",
          paises_qtd: "35",
          linguas_qtd: "25",
          cidades_qtd: "25",
          description:
            "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/continents", () => {
      return this.schema.all("continents");
    });
  },
});

const Home: NextPage = () => {
  useEffect(() => {
    fetch("http://localhost:3000/api/continents")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
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
        <SwiperElement />
      </Flex>
    </Box>
  );
};

export default Home;
