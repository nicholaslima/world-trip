import { WarningIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { RiErrorWarningLine } from "react-icons/ri";
import { continentType } from "../../types";

interface ContinentProps {
  continent: continentType;
}
const ContinentDetails: React.FC<ContinentProps> = ({
  continent,
}: ContinentProps) => {
  return (
    <Flex
      flexDirection={["column", "row"]}
      justify="space-between"
      align="center"
    >
      <Text
        lineHeight={["14px", "25px", "36px"]}
        fontSize={["7px", "10px", "14px", "16px", "20px"]}
        fontWeight="regular"
        w="100%"
        order={[2, 1]}
        textAlign="justify"
        mt={["20px", "0"]}
      >
        {continent.description}
      </Text>
      <Flex w="100%" justify="space-around" align="center" order={[1, 2]}>
        <Box>
          <Heading
            textAlign="center"
            color="yellow.900"
            fontSize={["10px", "14px", "18px", "25px", "34px"]}
            fontWeight="semibold"
          >
            {continent.countries_count}
          </Heading>
          <Text
            textAlign="center"
            color="gray.dark"
            fontSize={["7px", "10px", "12px", "16px", "18px"]}
            fontWeight="bold"
          >
            Países
          </Text>
        </Box>
        <Box>
          <Heading
            textAlign="center"
            color="yellow.900"
            fontSize={["10px", "14px", "18px", "25px", "34px"]}
            fontWeight="semibold"
          >
            {continent.languages_count}
          </Heading>
          <Text
            textAlign="center"
            color="gray.dark"
            fontSize={["7px", "10px", "12px", "16px", "18px"]}
            fontWeight="bold"
          >
            Linguas
          </Text>
        </Box>
        <Box>
          <Heading
            textAlign="center"
            color="yellow.900"
            fontSize={["10px", "14px", "18px", "25px", "34px"]}
            fontWeight="semibold"
          >
            {continent.cities_count}
          </Heading>
          <Flex gap="2px" align="center">
            <Text
              textAlign="center"
              color="gray.dark"
              fontSize={["7px", "10px", "12px", "16px", "18px"]}
              fontWeight="bold"
            >
              cidades +100
            </Text>
            <Tooltip
              label={`${continent.cities_count} cidades mais visitadas`}
              fontSize={["7px", "12px", "14px", "16px"]}
            >
              <WarningIcon
                w="auto"
                height={["7px", "12px", "14px", "16px"]}
                color="gray.medium"
              />
            </Tooltip>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export { ContinentDetails };
