import { useContext } from "react";
import { PickerContext } from "../Picker";
import { Card, Flex, Heading, Image } from "@chakra-ui/react";

export const PickerResults = () => {
  const { winners } = useContext(PickerContext);
  return (
    <>
      <Heading
        variant="tablet"
        color="white"
      >
        Tonight you are watching:
      </Heading>
      <Flex
        direction={["row"]}
        gap={5}
        my={3}
        justify="center"
      >
        {winners.map((show, index) => {
          return (
            <Card
              key={index}
              variant="picker"
              w={["auto", "240px"]}
            >
              <Image
                src={show.image_url}
                alt={show.title}
              />
              <Heading
                p={3}
                mt="auto"
                textAlign="center"
                fontSize="md"
                color="purple.900"
              >
                {
                `${show.title} ${show.average_rating ? show.average_rating : "0"}`
                }
                <i className="fa-solid fa-star fa-md"></i>
              </Heading>
            </Card>
          );
        })}
      </Flex>
    </>
  );
};
