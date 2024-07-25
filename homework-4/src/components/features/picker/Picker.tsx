import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { PickerProgress } from "./components/PickerProgress";
import { createContext, useState } from "react";
import { PickerButtons } from "./components/PickerButtons";
import { PickerStepper } from "./components/PickerStepper";
import { IShow } from "@/typings/show";

interface IPickerContext {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedShows: Array<IShow>;
  setSelectedShows: (shows: Array<IShow>) => void;
}

export const PickerContext = createContext<IPickerContext>({
  currentStep: 0,
  setCurrentStep: () => {},
  selectedShows: [],
  setSelectedShows: () => {},
});

export default function Picker() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedShows, setSelectedShows] = useState<Array<IShow>>([]);

  return (
    <PickerContext.Provider value={{ currentStep, setCurrentStep, selectedShows, setSelectedShows}}>
      <div>
        <Button
          variant="borderless"
          fontSize="2xl"
          fontWeight="regular"
          onClick={onOpen}
        >
          Show Picker
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="4xl"
        >
          <ModalOverlay />
          <ModalContent color="darkPurple">
            <ModalCloseButton />
            <ModalHeader>TV Show Picker</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Choose tv show</Text>
            </ModalBody>

            <ModalFooter>
              <Flex
                direction="column"
                width="100%"
              >
                <PickerStepper />
                <PickerProgress />
                <PickerButtons />
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </PickerContext.Provider>
  );
}
