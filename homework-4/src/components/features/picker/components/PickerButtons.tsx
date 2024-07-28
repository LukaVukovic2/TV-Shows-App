import { Flex, Button } from "@chakra-ui/react";
import { PickerContext } from "../Picker";
import { useContext } from "react";

export const PickerButtons = () => {
  const {
    currentStep,
    setCurrentStep,
    selectedShows,
    setSelectedShows,
    totalSteps,
    setTotalSteps,
    round,
    setRound,
    setWinners,
  } = useContext(PickerContext);

  const isSelected = selectedShows[currentStep - 1];

  function NextStep() {
    if (currentStep == totalSteps) {
      const newStepCount = 4 / Math.pow(2, round);
      setRound(round + 1);
      setCurrentStep(1);
      setTotalSteps(newStepCount);
      setWinners(selectedShows);
      setSelectedShows(Array.from({ length: newStepCount }));
      return;
    }
    setCurrentStep(currentStep + 1);
  }

  return (
    <Flex
      justify="space-between"
      mt={4}
      width="100%"
      gap={2}
    >
      <Button
        onClick={() => setCurrentStep(currentStep - 1)}
        isDisabled={currentStep == 1}
      >
        Previous
      </Button>
      <Button
        onClick={NextStep}
        isDisabled={!isSelected}
      >
        {round < 3 ? 
          (currentStep < totalSteps ? 
            "Next" : "Next round"): "Show Winner!"}
      </Button>
    </Flex>
  );
};
