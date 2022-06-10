import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const HomeBanner: React.FC = () => {
  return (
    <Flex
      bgSize="cover"
      py="20px"
      px="10px"
      bgImage="imgs/Background.png"
      w="100%"
      mx="auto"
    >
      <Flex
        mx="auto"
        w="100%"
        flexDirection={["column", "column", "row"]}
        maxWidth={["100%", "700px", "980px"]}
        justify={["space-around", "space-between"]}
        gap="10px"
        align="center"
      >
        <Flex
          flexDirection="column"
          maxWidth={["100%", "524px"]}
          order={[2, 2, 1]}
          justifyContent={["center"]}
          align="center"
        >
          <Heading
            color="white.light"
            lineHeight={["18px", "30px", "54px", "54px", "54px"]}
            fontWeight="550"
            fontSize={["14px", "20px", "36px", "36px", "36px"]}
            textAlign={["center", "left"]}
          >
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text
            color="gray.light"
            fontWeight="normal"
            fontSize={["7px", "14px", "16px", "20px", "20px"]}
            mt={["7px", "12px", "14px", "20px"]}
            textAlign={["center", "center", "left"]}
            w={["80%", "80%", "100%"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Image
          position="relative"
          bottom={["0px", "0px", "-60px"]}
          h={["70px", "120px", "270px"]}
          src="imgs/Airplane.png"
          alt="avião"
          order={[1, 1, 2]}
        />
      </Flex>
    </Flex>
  );
};

export { HomeBanner };
