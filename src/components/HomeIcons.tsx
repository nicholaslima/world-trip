import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

const list = {
  night: {
    title: "vida noturna",
    img: "imgs/cocktail.png",
    alt: "cocktail image",
  },
  beach: {
    title: "praia",
    img: "imgs/surf.png",
    alt: "surf image",
  },
  modern: {
    title: "moderno",
    img: "imgs/building.png",
    alt: "building image",
  },
  classic: {
    title: "clássico",
    img: "imgs/museum.png",
    alt: "museum image",
  },
  earth: {
    title: "e mais...",
    img: "imgs/earth 1.png",
    alt: "earth image",
  },
};

const HomeIcons: React.FC = () => {
  return (
    <Grid
      templateColumns={[
        "repeat(2,1fr)",
        "repeat(3,1fr)",
        "repeat(3,1fr)",
        "repeat(5,1fr)",
      ]}
      gap="10px"
      mx="auto"
      w="100%"
      maxWidth={["40%", "80%", "80%", "980px"]}
      mt={["20px", "40px", "60px", "80px"]}
      mb={["17px", "30px", "60px", "80px"]}
    >
      {Object.entries(list).map(([key, value]) => (
        <Flex
          align="center"
          justifyContent="space-between"
          gap={["5px", "7px", "10px", "20px"]}
          flexDirection="column"
          key={key}
        >
          <Image
            src={value.img}
            h={["13px", "20px", "40px", "50px", "70px"]}
            alt={value.alt}
            mx="auto"
          />
          <Text
            fontWeight="semibold"
            fontSize={["5px", "10px", "12px", "16px"]}
          >
            {value.title}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
};

export { HomeIcons };
