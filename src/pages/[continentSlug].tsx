import { Header } from "../components/header";
import { Box, Flex, Grid, Heading } from "@chakra-ui/react";

import { continentType } from "../types";
import { GetServerSideProps } from "next";
import { CityItem } from "../components/cityItem";
import { ContinentDetails } from "../components/ContinentDetails";

interface ContinentProps {
  continent: continentType;
}

export default function Continent({ continent }: ContinentProps) {
  if (!continent) {
    return (
      <>
        <h1>nenhuma continente renderizado, erro no banco de dados!</h1>
      </>
    );
  }
  return (
    <>
      <Header />

      <Flex
        bgSize="cover"
        h={["150px", "300px", "400px", "500px"]}
        bgImage={continent.image_url}
      >
        <Box bg="black" opacity="0.4" w="100%"></Box>
      </Flex>
      <Box maxWidth="980px" mx="auto" px="20px">
        <Heading
          fontFamily="fonts.body"
          fontWeight="semibold"
          fontSize={["18px", "30px", "40px", "48px"]}
          color="white.normal"
          textTransform="capitalize"
          position="absolute"
          top={["140px", "250px", "350px", "480px"]}
          opacity="1"
          z-index="10"
        >
          {continent.continent}
        </Heading>
      </Box>
      <Box
        w="100%"
        px="10px"
        maxWidth={["100%", "1040px"]}
        mx="auto"
        my={["20px", "40px", "60px", "80px"]}
      >
        <ContinentDetails continent={continent} />

        <Heading
          fontSize={["16px", "20px", "28px", "36px"]}
          fontFamily="fonts.body"
          fontWeight={["bold", "medium"]}
          mb={["10px", "20px", "30px", "40px"]}
          mt={["20px", "40px", "60px", "80px"]}
        >
          Cidades +100
        </Heading>

        <Grid
          templateColumns={["repeat(2,1fr)", "repeat(3,1fr)", "repeat(4,1fr)"]}
          gap={["15px", "25px", "35px", "45px"]}
        >
          {continent.cities.map((city, index) => (
            <CityItem key="index" city={city} />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const continentSlug = params?.continentSlug;

  function findContinent(data: continentType[]) {
    const found = data.find(
      (item: continentType) => item.slug === continentSlug
    );

    if (!found) {
      return null;
    }

    return found;
  }

  const continent = await fetch("http://localhost:3333/continents")
    .then((response) => response.json())
    .then((data) => {
      return findContinent(data);
    });

  return { props: { continent } };
};
