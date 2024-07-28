import {
  Button,
  Flex,
  Heading,
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
  round: number,
  setRound: (number: number) => void
  totalSteps: number;
  setTotalSteps: (number: number) => void,
  winners: Array<IShow>,
  setWinners: (shows: Array<IShow>) => void;
}

export const PickerContext = createContext<IPickerContext>({
  currentStep: 1,
  setCurrentStep: () => {},
  selectedShows: [],
  setSelectedShows: () => {},
  showsByStep: [],
  round: 1,
  setRound: () => {},
  totalSteps: 4,
  setTotalSteps: () => {},
  winners: [],
  setWinners: () => {},
});

export default function Picker() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentStep, setCurrentStep] = useState(1);
  const [round, setRound] = useState(1);
  const [totalSteps, setTotalSteps] = useState(4);
  const [winners, setWinners] = useState<Array<IShow>>([]);
  const [selectedShows, setSelectedShows] = useState<Array<IShow>>(Array.from({ length: 4 }));
  
  const { data: showsList } = useSWR<IShowList>(swrKeys.allShows, fetcher);
  const showsByStep = showsList?.shows || [];

  return (
    <PickerContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        selectedShows,
        setSelectedShows,
        showsByStep,
        totalSteps,
        setTotalSteps,
        round,
        setRound,
        winners,
        setWinners
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
        size={["full", "lg"]}
      >
        <ModalOverlay />
        <ModalContent
          color="white"
          bg="darkPurple"
        >
          <ModalCloseButton />
          <ModalHeader>TV Show Picker</ModalHeader>
          <ModalBody>
            {round <= 3 ? (
              <>
                <Heading color="white" mb={2}>Round {round}</Heading>
                {selectedShows[0]?.id ? <PickerIcon /> : <Text lineHeight="48px" fontSize="lg">Choose a better show!</Text>}
                <PickerTvShowStep />
              </>
            ) : (
              <PickerResults />
            )}
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