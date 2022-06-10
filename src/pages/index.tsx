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
import { HomeBanner } from "../components/HomeBanner";
import { HomeIcons } from "../components/HomeIcons";

interface HomeProps {
  continents: continentsPrev[];
}

const Home: NextPage<HomeProps> = ({ continents }: HomeProps) => {
  return (
    <Box>
      <Header></Header>

      <HomeBanner />
      <HomeIcons />

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
