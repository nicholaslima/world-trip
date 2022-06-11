import { Box, Flex, GridItem, Heading, Image, Text } from "@chakra-ui/react";

import { citiestype } from "../../types";

interface cityProps {
  city: citiestype;
}

const CityItem: React.FC<cityProps> = ({ city }: cityProps) => {
  return (
    <GridItem>
      <Box
        bgImage={city.image_url}
        h={["70px", "80px", "100px", "173px"]}
        bgSize="cover"
      ></Box>
      <Flex
        p="10px"
        align="center"
        justify="space-between"
        borderWidth="0px 1px 1px 1px"
        borderColor="yellow.light"
        h={["50px", "70px", "90px", "115px"]}
        bg="white.normal"
        overflow="hidden"
      >
        <Box>
          <Heading
            fontSize={["7px", "12px", "16px", "20px"]}
            fontFamily="fonts.cities"
            fontWeight="semibold"
            mb={["5px", "8px", "12px"]}
          >
            {city.name}
          </Heading>
          <Text
            fontSize={["7px", "12px", "14px", "16px"]}
            fontWeight="medium"
            color="gray.medium"
            fontFamily="fonts.cities"
            h={["12px", "16px", "20px", "26px"]}
            textOverflow="ellipsis"
            wordBreak="break-all"
            mb="10px"
            whiteSpace="break-spaces"
          >
            {city.country}
          </Text>
        </Box>
        <Image
          src={city.flag_url}
          borderRadius="50%"
          alt="country image"
          ml="10px"
          h={["10px", "20px", "30px"]}
          w={["10px", "20px", "30px"]}
        />
      </Flex>
    </GridItem>
  );
};

export { CityItem };
