import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import NextLink from "next/link";
import { GetStaticProps } from "next";

import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { SwiperItem } from "./SwiperItem";

import { continentsPrev } from "../../types";

interface SwiperElementProps {
  continents: continentsPrev[];
}

export function SwiperElement({ continents }: SwiperElementProps) {
  return (
    <Swiper
      pagination={{ type: "bullets" }}
      modules={[Pagination, Navigation]}
      navigation={true}
    >
      {continents.map((continent, index) => (
        <SwiperSlide key={index}>
          <SwiperItem
            name={continent.name}
            description={continent.desc}
            slug={continent.slug}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
