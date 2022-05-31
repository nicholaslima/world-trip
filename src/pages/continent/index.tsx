import { Header } from "../../components/header";
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

export default function Continent() {
  return (
    <>
      <Header />

      <Flex bgSize="cover" h="500px" bgImage="imgs/europe.png">
        <Box w="100%" maxWidth="980px" mx="auto">
          <Heading
            fontFamily="fonts.body"
            fontWeight="semibold"
            fontSize="48px"
            color="white.normal"
            position="relative"
            mt="369px"
          >
            Europa
          </Heading>
        </Box>
      </Flex>

      <Box w="100%" maxWidth="1040px" mx="auto" my="80px">
        <Flex gap="70px" align="center">
          <Text
            lineHeight="36px"
            fontSize="20px"
            fontWeight="regular"
            textAlign="justify"
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <HStack spacing="70px">
            <Box>
              <Heading
                textAlign="center"
                color="yellow.900"
                fontSize="34px"
                fontWeight="semibold"
              >
                50
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
                60
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
                27
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
          <GridItem h="279px" bg="white.normal">
            <Box bgImage="imgs/europe.png" h="173px" bgSize="cover"></Box>
            <Flex
              p="18px 25px 25px 25px"
              align="center"
              justify="space-between"
              borderWidth="0px 1px 1px 1px"
              borderColor="yellow.light"
            >
              <Box>
                <Heading
                  fontSize="20px"
                  fontFamily="fonts.cities"
                  fontWeight="semibold"
                  mb="12px"
                >
                  Londres
                </Heading>
                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="gray.medium"
                  fontFamily="fonts.cities"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="imgs/country.png"
                borderRadius="50%"
                alt="country image"
                h="30px"
                w="30px"
              />
            </Flex>
          </GridItem>

          <GridItem h="279px" bg="white.normal">
            <Box bgImage="imgs/europe.png" h="173px" bgSize="cover"></Box>
            <Flex
              p="18px 25px 25px 25px"
              align="center"
              justify="space-between"
              borderWidth="0px 1px 1px 1px"
              borderColor="yellow.light"
            >
              <Box>
                <Heading
                  fontSize="20px"
                  fontFamily="fonts.cities"
                  fontWeight="semibold"
                  mb="12px"
                >
                  Londres
                </Heading>
                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="gray.medium"
                  fontFamily="fonts.cities"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="imgs/country.png"
                borderRadius="50%"
                alt="country image"
                h="30px"
                w="30px"
              />
            </Flex>
          </GridItem>

          <GridItem h="279px" bg="white.normal">
            <Box bgImage="imgs/europe.png" h="173px" bgSize="cover"></Box>
            <Flex
              p="18px 25px 25px 25px"
              align="center"
              justify="space-between"
              borderWidth="0px 1px 1px 1px"
              borderColor="yellow.light"
            >
              <Box>
                <Heading
                  fontSize="20px"
                  fontFamily="fonts.cities"
                  fontWeight="semibold"
                  mb="12px"
                >
                  Londres
                </Heading>
                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="gray.medium"
                  fontFamily="fonts.cities"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="imgs/country.png"
                borderRadius="50%"
                alt="country image"
                h="30px"
                w="30px"
              />
            </Flex>
          </GridItem>

          <GridItem h="279px" bg="white.normal">
            <Box bgImage="imgs/europe.png" h="173px" bgSize="cover"></Box>
            <Flex
              p="18px 25px 25px 25px"
              align="center"
              justify="space-between"
              borderWidth="0px 1px 1px 1px"
              borderColor="yellow.light"
            >
              <Box>
                <Heading
                  fontSize="20px"
                  fontFamily="fonts.cities"
                  fontWeight="semibold"
                  mb="12px"
                >
                  Londres
                </Heading>
                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="gray.medium"
                  fontFamily="fonts.cities"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="imgs/country.png"
                borderRadius="50%"
                alt="country image"
                h="30px"
                w="30px"
              />
            </Flex>
          </GridItem>

          <GridItem h="279px" bg="white.normal">
            <Box bgImage="imgs/europe.png" h="173px" bgSize="cover"></Box>
            <Flex
              p="18px 25px 25px 25px"
              align="center"
              justify="space-between"
              borderWidth="0px 1px 1px 1px"
              borderColor="yellow.light"
            >
              <Box>
                <Heading
                  fontSize="20px"
                  fontFamily="fonts.cities"
                  fontWeight="semibold"
                  mb="12px"
                >
                  Londres
                </Heading>
                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="gray.medium"
                  fontFamily="fonts.cities"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="imgs/country.png"
                borderRadius="50%"
                alt="country image"
                h="30px"
                w="30px"
              />
            </Flex>
          </GridItem>

          <GridItem h="279px" bg="white.normal">
            <Box bgImage="imgs/europe.png" h="173px" bgSize="cover"></Box>
            <Flex
              p="18px 25px 25px 25px"
              align="center"
              justify="space-between"
              borderWidth="0px 1px 1px 1px"
              borderColor="yellow.light"
            >
              <Box>
                <Heading
                  fontSize="20px"
                  fontFamily="fonts.cities"
                  fontWeight="semibold"
                  mb="12px"
                >
                  Londres
                </Heading>
                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="gray.medium"
                  fontFamily="fonts.cities"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="imgs/country.png"
                borderRadius="50%"
                alt="country image"
                h="30px"
                w="30px"
              />
            </Flex>
          </GridItem>

          <GridItem h="279px" bg="white.normal">
            <Box bgImage="imgs/europe.png" h="173px" bgSize="cover"></Box>
            <Flex
              p="18px 25px 25px 25px"
              align="center"
              justify="space-between"
              borderWidth="0px 1px 1px 1px"
              borderColor="yellow.light"
            >
              <Box>
                <Heading
                  fontSize="20px"
                  fontFamily="fonts.cities"
                  fontWeight="semibold"
                  mb="12px"
                >
                  Londres
                </Heading>
                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="gray.medium"
                  fontFamily="fonts.cities"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="imgs/country.png"
                borderRadius="50%"
                alt="country image"
                h="30px"
                w="30px"
              />
            </Flex>
          </GridItem>

          <GridItem h="279px" bg="white.normal">
            <Box bgImage="imgs/europe.png" h="173px" bgSize="cover"></Box>
            <Flex
              p="18px 25px 25px 25px"
              align="center"
              justify="space-between"
              borderWidth="0px 1px 1px 1px"
              borderColor="yellow.light"
            >
              <Box>
                <Heading
                  fontSize="20px"
                  fontFamily="fonts.cities"
                  fontWeight="semibold"
                  mb="12px"
                >
                  Londres
                </Heading>
                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="gray.medium"
                  fontFamily="fonts.cities"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="imgs/country.png"
                borderRadius="50%"
                alt="country image"
                h="30px"
                w="30px"
              />
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
