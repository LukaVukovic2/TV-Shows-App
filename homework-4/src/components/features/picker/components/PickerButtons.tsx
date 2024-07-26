import { Flex, Button } from "@chakra-ui/react"
import { PickerContext } from "../Picker";
import { useContext } from "react";

export const PickerButtons = () => {
  const { currentStep, setCurrentStep, selectedShows, totalSteps } = useContext(PickerContext);
  const isSelected = selectedShows[currentStep - 1];
  
  return (
    <Flex justify="space-between" mt={4} width="100%">
      <Button onClick={() => setCurrentStep(currentStep - 1)} isDisabled={currentStep == 1}>
        Previous
      </Button>
      <Button onClick={() => setCurrentStep(currentStep + 1)} isDisabled={!isSelected}>
        {currentStep < totalSteps ? "Next" : "Show Results"}
      </Button>
    </Flex>
  )
}