import { Flex, Button } from "@chakra-ui/react"
import { PickerContext } from "../Picker";
import { useContext } from "react";

export const PickerButtons = () => {
  const { currentStep, setCurrentStep } = useContext(PickerContext);
  return (
    <Flex justify="space-between">
      <Button onClick={() => setCurrentStep(currentStep - 1)}>
        Previous
      </Button>
      <Button onClick={() => setCurrentStep(currentStep + 1)}>
        Next
      </Button>
    </Flex>
  )
}