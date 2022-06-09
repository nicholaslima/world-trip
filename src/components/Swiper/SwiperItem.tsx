import { Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import NextLink from "next/link";

interface SwiperItemProps {
  name: string;
  description: string;
  slug: string;
}
export function SwiperItem({ name, description, slug }: SwiperItemProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      flexDirection="column"
      align="center"
      justify="center"
    >
      <NextLink href={`/${slug}`} passHref>
        <ChakraLink>
          <Heading
            fontFamily="fonts.body"
            fontSize="48px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
            mb="16px"
          >
            {name}
          </Heading>

          <Text
            fontFamily="fonts.body"
            fontSize="24px"
            fontWeight="700"
            color="white.normal"
            textAlign="center"
          >
            {description}
          </Text>
        </ChakraLink>
      </NextLink>
    </Flex>
  );
}
