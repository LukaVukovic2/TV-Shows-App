import { useContext } from "react";
import { PickerContext } from "../Picker";
import { Card, Flex, Heading, Image } from "@chakra-ui/react";

export const PickerResults = () => {
  const { selectedShows } = useContext(PickerContext);
  return (
    <>
      <Heading
        variant="tablet"
        color="white"
      >
        Your favorite TV Shows
      </Heading>
      <Flex
        direction={["column", "column", "row"]}
        gap={5}
        my={3}
        alignItems={["center", "center", "end"]}
      >
        {selectedShows.map((show, index) => {
          return (
            <Card
              key={index}
              variant="picker"
              w={["auto", "240px"]}
            >
              <Image
                hideBelow="md"
                src={show.image_url}
                alt={show.title}
              />
              <Heading
                p={3}
                mt="auto"
                textAlign="center"
                fontSize="md"
                color="darkPurple"
              >
                {show.title}
              </Heading>
            </Card>
          );
        })}
      </Flex>
    </>
  );
};
