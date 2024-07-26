import { Progress } from "@chakra-ui/react"
import { useContext } from "react"
import { PickerContext } from "../Picker";

export const PickerProgress = () => {
  const { currentStep, totalSteps } = useContext(PickerContext);
  return <Progress value={currentStep} min={1} max={totalSteps} colorScheme="green" width="100%"/>
}