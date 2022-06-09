import { Header } from "../components/header";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import { WarningIcon } from "@chakra-ui/icons";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { continentType } from "../types";
import { GetServerSideProps } from "next";

interface ContinentProps {
  continent: continentType;
}

export default function Continent({ continent }: ContinentProps) {
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
        <Flex gap="70px" align="center">
          <Text
            lineHeight="36px"
            fontSize="20px"
            fontWeight="regular"
            textAlign="justify"
          >
            {continent.description}
          </Text>
          <HStack spacing="70px">
            <Box>
              <Heading
                textAlign="center"
                color="yellow.900"
                fontSize="34px"
                fontWeight="semibold"
              >
                {continent.countries_count}
              </Heading>
              <Text
                textAlign="center"
                color="gray.dark"
                fontSize="18px"
                fontWeight="bold"
              >
                Países
              </Text>
            </Box>
            <Box>
              <Heading
                textAlign="center"
                color="yellow.900"
                fontSize="34px"
                fontWeight="semibold"
              >
                {continent.languages_count}
              </Heading>
              <Text
                textAlign="center"
                color="gray.dark"
                fontSize="18px"
                fontWeight="bold"
              >
                Linguas
              </Text>
            </Box>
            <Box>
              <Heading
                textAlign="center"
                color="yellow.900"
                fontSize="34px"
                fontWeight="semibold"
              >
                {continent.cities_count}
              </Heading>
              <Flex align="center">
                <Text
                  textAlign="center"
                  color="gray.dark"
                  fontSize="18px"
                  fontWeight="bold"
                  w="130px"
                >
                  cidades +100
                </Text>
                <Tooltip label="125 cidades" fontSize="md">
                  <WarningIcon color="yellow.900"></WarningIcon>
                </Tooltip>
              </Flex>
            </Box>
          </HStack>
        </Flex>

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
            <GridItem key={index}>
              <Box bgImage={city.image_url} h="173px" bgSize="cover"></Box>
              <Flex
                p="18px 25px 25px 25px"
                align="center"
                justify="space-between"
                borderWidth="0px 1px 1px 1px"
                borderColor="yellow.light"
                h="115px"
                bg="white.normal"
                overflow="hidden"
              >
                <Box>
                  <Heading
                    fontSize="20px"
                    fontFamily="fonts.cities"
                    fontWeight="semibold"
                    mb="12px"
                  >
                    {city.name}
                  </Heading>
                  <Text
                    fontSize="16px"
                    fontWeight="medium"
                    color="gray.medium"
                    fontFamily="fonts.cities"
                    h="26px"
                    w="150px"
                    textOverflow="ellipsis"
                    wordBreak="break-all"
                    whiteSpace="break-spaces"
                  >
                    {city.country}
                  </Text>
                </Box>
                <Image
                  src={city.flag_url}
                  borderRadius="50%"
                  alt="country image"
                  h="30px"
                  w="30px"
                />
              </Flex>
            </GridItem>
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
  const slug = params?.slug;

  function findContinent(data: continentType[]) {
    const found = data.find((item: continentType) => item.slug === slug);

    if (!found) {
      return;
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
