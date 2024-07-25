import { Progress } from "@chakra-ui/react"
import { useContext } from "react"
import { PickerContext } from "../Picker";

export const PickerProgress = () => {
  const {currentStep} = useContext(PickerContext);
  return <Progress value={currentStep} max={5} />
}