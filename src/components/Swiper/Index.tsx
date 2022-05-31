import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import NextLink from "next/link";

import { Flex, Heading, Link, Text } from "@chakra-ui/react";
export function SwiperElement() {
  return (
    <Swiper
      pagination={{ type: "bullets" }}
      modules={[Pagination, Navigation]}
      navigation={true}
    >
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          flexDirection="column"
          align="center"
          justify="center"
        >
          <Heading
            fontFamily="fonts.body"
            fontSize="48px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
            mb="16px"
          >
            Europa
          </Heading>
          <Text
            fontFamily="fonts.body"
            fontSize="24px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
          >
            O continente mais antigo.
          </Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          flexDirection="column"
          align="center"
          justify="center"
        >
          <Heading
            fontFamily="fonts.body"
            fontSize="48px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
            mb="16px"
          >
            América do Norte
          </Heading>
          <Text
            fontFamily="fonts.body"
            fontSize="24px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
          >
            possui grandes cordilheiras e Montanhas Rochosas.
          </Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          flexDirection="column"
          align="center"
          justify="center"
        >
          <Heading
            fontFamily="fonts.body"
            fontSize="48px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
            mb="16px"
          >
            América do Sul
          </Heading>
          <Text
            fontFamily="fonts.body"
            fontSize="24px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
          >
            Apresenta paisagens naturais muito diversas.
          </Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          flexDirection="column"
          align="center"
          justify="center"
        >
          <Heading
            fontFamily="fonts.body"
            fontSize="48px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
            mb="16px"
          >
            Ásia
          </Heading>
          <Text
            fontFamily="fonts.body"
            fontSize="24px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
          >
            multicultural, abrigando diversas culturas.
          </Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          flexDirection="column"
          align="center"
          justify="center"
        >
          <Heading
            fontFamily="fonts.body"
            fontSize="48px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
            mb="16px"
          >
            África
          </Heading>
          <Text
            fontFamily="fonts.body"
            fontSize="24px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
          >
            continente de maior biodiversidade do mundo
          </Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          flexDirection="column"
          align="center"
          justify="center"
        >
          <Heading
            fontFamily="fonts.body"
            fontSize="48px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
            mb="16px"
          >
            Oceania
          </Heading>
          <Text
            fontFamily="fonts.body"
            fontSize="24px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
          >
            vários grupos de ilhas do oceano Pacífico.
          </Text>
        </Flex>
      </SwiperSlide>
    </Swiper>
  );
}
