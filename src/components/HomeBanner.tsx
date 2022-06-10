import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const HomeBanner: React.FC = () => {
  return (
    <Flex bgSize="cover" h="335px" bgImage="imgs/Background.png">
      <Flex
        mx="auto"
        w="100%"
        maxWidth="980px"
        justify="space-between"
        align="center"
      >
        <Box maxWidth="524px">
          <Heading
            color="white.light"
            lineHeight="54px"
            fontWeight="550"
            fontSize="36px"
          >
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text
            color="gray.light"
            fontWeight="normal"
            fontSize="20px"
            mt="20px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          position="relative"
          bottom="-60px"
          h="270px"
          src="imgs/Airplane.png"
          alt="avião"
        />
      </Flex>
    </Flex>
  );
};

export { HomeBanner };
