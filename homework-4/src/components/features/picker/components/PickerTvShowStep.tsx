import { PickerContext } from "../Picker";
import { useContext } from "react";
import { Box, Card, Flex, Heading, Image } from "@chakra-ui/react";
import { IShow } from "@/typings/show";

export const PickerTvShowStep = () => {
  const {
    currentStep,
    selectedShows,
    setSelectedShows,
    showsByStep
  } = useContext(PickerContext);

  if (!showsByStep) return <div>No shows available</div>;
  const shows = showsByStep.slice((currentStep - 1) * 4, 4 * currentStep) || [];

  function handleSelection(show: IShow, isSelected?: IShow) {
    if (isSelected) {
      setSelectedShows(selectedShows?.filter((s) => s !== show));
    } else {
      const updatedShows = [...selectedShows];
      updatedShows.splice(currentStep - 1, 1, show);
      setSelectedShows(updatedShows);
    }
  }

  return (
    <Flex
      gap={4}
      my={5}
      direction={["column", "row"]}
    >
      {shows.map((show) => {
        const isSelected = selectedShows?.find((selected) => selected === show);
        return (
          <Box
            w={["auto", "240px"]}
            cursor="pointer"
            key={show.id}
            onClick={() => handleSelection(show, isSelected)}
          >
            <Card
              bg={isSelected ? "green" : "white"}
              variant="picker"
            >
              <Image
                hideBelow="md"
                src={show.image_url}
                alt={show.title}
                />
              <Heading
                textAlign="center"
                fontSize="md"
                mt="auto"
                padding={3}
                color={isSelected ? "white" : "darkPurple"}
                >
                {show?.title}
              </Heading>
            </Card>
          </Box>
        );
      })}
    </Flex>
  );
};