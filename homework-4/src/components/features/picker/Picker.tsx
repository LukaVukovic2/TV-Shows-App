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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { PickerProgress } from "./components/PickerProgress";
import { createContext, useState } from "react";
import { PickerButtons } from "./components/PickerButtons";
import { PickerTvShowStep } from "./components/PickerTvShowStep";
import { IShow, IShowList } from "@/typings/show";
import useSWR from "swr";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { PickerResults } from "./components/PickerResults";
import { PickerIcon } from "./components/PickerIcon";

interface IPickerContext {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedShows: Array<IShow>;
  setSelectedShows: (shows: Array<IShow>) => void;
  showsByStep: Array<IShow>;
  totalSteps: number;
}

export const PickerContext = createContext<IPickerContext>({
  currentStep: 1,
  setCurrentStep: () => {},
  selectedShows: [],
  setSelectedShows: () => {},
  showsByStep: [],
  totalSteps: 5
});

export default function Picker() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedShows, setSelectedShows] = useState<Array<IShow>>(Array.from({ length: 5 }));
  const { data: showsList } = useSWR<IShowList>(swrKeys.allShows, fetcher);
  const showsByStep = showsList?.shows || [];
  const totalSteps = 5;

  return (
    <PickerContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        selectedShows,
        setSelectedShows,
        showsByStep,
        totalSteps
      }}
    >
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
        size={["full", "lg", "2xl", "4xl"]}
      >
        <ModalOverlay />
        <ModalContent
          color="white"
          bg="darkPurple"
        >
          <ModalCloseButton />
          <ModalHeader>TV Show Picker</ModalHeader>
          <ModalBody>
            {
              currentStep <= totalSteps && (
                selectedShows[0]?.id ? 
                  <PickerIcon /> : <Text lineHeight="48px" fontSize="xl">Choose 1 show out of 4</Text>
              )
            }
            {currentStep <= totalSteps ? <PickerTvShowStep /> : <PickerResults />}
          </ModalBody>

          <ModalFooter>
            <Flex
              direction="column"
              alignItems="center"
              width="100%"
            >
              {currentStep <= totalSteps ? 
                <>
                  <PickerProgress />
                  <PickerButtons />
                </>
               : 
                <Button onClick={onClose}>Close</Button>
              }
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </PickerContext.Provider>
  );
}
