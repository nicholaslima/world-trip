import { Box, HStack, Image, Text } from "@chakra-ui/react";

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
    <HStack spacing="130px" mx="auto" maxWidth="980px" mt="80px" mb="80px">
      {Object.entries(list).map(([key, value]) => (
        <Box key={key}>
          <Image src={value.img} h="70px" alt={value.alt} mx="auto" mb="20px" />
          <Text fontWeight="semibold">{value.title}</Text>
        </Box>
      ))}
    </HStack>
  );
};

export { HomeIcons };
