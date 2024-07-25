import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWR from "swr";
import { PickerContext } from "../Picker";
import { useContext } from "react";
import { IShowList } from "@/typings/show";
import { Button, Card, Flex, Heading, Image } from "@chakra-ui/react";

export const PickerStepper = () => {
  const { currentStep, selectedShows, setSelectedShows } =
    useContext(PickerContext);
  const { data: showsList } = useSWR<IShowList>(
    swrKeys.showsByPage(currentStep),
    fetcher
  );
  const shows = showsList?.shows;
  console.log();

  if (!shows) return null;

  return (
    <Flex
      gap={4}
      mb={5}
    >
      {shows?.map((show) => {
        const isSelected = selectedShows?.find((selected) => selected === show);
        return (
          <Card
            key={show.id}
            w={["auto", "240px"]}
            bg={isSelected ? "green" : "unset"}
          >
            <Image
              src={show.image_url}
              alt={show.title}
            />
            <Heading
              textAlign="center"
              fontSize="md"
            >
              {show?.title}
            </Heading>
            <Button
              onClick={
                isSelected
                  ? () =>
                      setSelectedShows(selectedShows?.filter((s) => s !== show))
                  : () => {
                      setSelectedShows([...selectedShows, show]);
                    }
              }
            >
              Add
            </Button>
          </Card>
        );
      })}
    </Flex>
  );
};
