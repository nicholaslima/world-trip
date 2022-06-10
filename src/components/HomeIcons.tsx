import { Box, HStack, Image, Text } from "@chakra-ui/react";

const HomeIcons: React.FC = () => {
  return (
    <HStack spacing="130px" mx="auto" maxWidth="980px" mt="80px" mb="80px">
      <Box>
        <Image
          src="imgs/cocktail.png"
          h="70px"
          alt="cocktail image"
          mx="auto"
          mb="20px"
        />
        <Text fontWeight="semibold">vida noturna</Text>
      </Box>

      <Box>
        <Image
          src="imgs/surf.png"
          h="70px"
          alt="surf image"
          mx="auto"
          mb="20px"
        />
        <Text fontWeight="semibold">praia</Text>
      </Box>

      <Box>
        <Image
          src="imgs/building.png"
          h="70px"
          alt="building image"
          mx="auto"
          mb="20px"
        />
        <Text fontWeight="semibold">moderno</Text>
      </Box>

      <Box>
        <Image
          src="imgs/museum.png"
          h="70px"
          alt="museum image"
          mx="auto"
          mb="20px"
        />
        <Text fontWeight="semibold">classico</Text>
      </Box>

      <Box>
        <Image
          src="imgs/earth 1.png"
          h="70px"
          alt="earth image"
          mx="auto"
          mb="20px"
        />
        <Text fontWeight="semibold">e mais...</Text>
      </Box>
    </HStack>
  );
};

export { HomeIcons };
