import { WarningIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, HStack, Text, Tooltip } from "@chakra-ui/react";

import { continentType } from "../../types";

interface ContinentProps {
  continent: continentType;
}
const ContinentDetails: React.FC<ContinentProps> = ({
  continent,
}: ContinentProps) => {
  return (
    <Flex gap="70px" align="center">
      <Text
        lineHeight="36px"
        fontSize="20px"
        fontWeight="regular"
        textAlign="justify"
      >
        {continent.description}
      </Text>
      <HStack spacing="70px">
        <Box>
          <Heading
            textAlign="center"
            color="yellow.900"
            fontSize="34px"
            fontWeight="semibold"
          >
            {continent.countries_count}
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
            {continent.languages_count}
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
            {continent.cities_count}
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
  );
};

export { ContinentDetails };
