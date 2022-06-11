import type { GetStaticProps, NextPage } from "next";

import { Box, Flex, Heading, Divider } from "@chakra-ui/react";

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
        w={["20%", "20%", "10%", "90px"]}
        borderWidth={["0.0001rem"]}
        borderColor="gray.dark"
        mx="auto"
      ></Divider>

      <Box mx="auto" maxWidth={["80%", "980px"]}>
        <Heading
          py={["10px", "30px", "52px"]}
          w={["100%", "550px"]}
          mx="auto"
          lineHeight={["15px", "20px", "30px", "54px"]}
          fontWeight={["bold", "medium"]}
          fontSize={["10px", "16px", "20px", "26px", "36px"]}
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
        h={["200px", "380px", "450px"]}
        mb={["10px", "20px", "30px", "40px"]}
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
