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

      <Flex bgSize="cover" h="500px" bgImage={continent.image_url}>
        <Box bg="black" opacity="0.4" w="100%"></Box>
      </Flex>
      <Box maxWidth="980px" mx="auto">
        <Heading
          fontFamily="fonts.body"
          fontWeight="semibold"
          fontSize="48px"
          color="white.normal"
          position="absolute"
          top="480px"
          opacity="1"
        >
          {continent.continent}
        </Heading>
      </Box>

      <Box w="100%" maxWidth="1040px" mx="auto" my="80px">
        <ContinentDetails continent={continent} />

        <Heading
          fontSize="36px"
          fontFamily="fonts.body"
          fontWeight="medium"
          mb="40px"
          mt="80px"
        >
          Cidades +100
        </Heading>

        <Grid templateColumns="repeat(4,1fr)" gap="45px">
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
