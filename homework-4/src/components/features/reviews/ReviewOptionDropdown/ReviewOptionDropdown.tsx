import {
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import ReviewForm from "../../shows/ReviewForm/ReviewForm";
import { swrKeys } from "@/fetchers/swrKeys";
import { deleteReview } from "@/fetchers/mutators";
import { updateReview } from "@/fetchers/mutators";
import { IReview, IReviewItemProps } from "@/typings/review";

export default function ReviewOptionDropdown({review}: IReviewItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const items = "5";

  const { trigger: deleteTrigger } = useSWRMutation(
    swrKeys.deleteReview(review.id as string),
    deleteReview,
    {
      onSuccess: () => {
        toast({
          title: "Review deleted",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
        mutate(swrKeys.getReviews(review.show_id, "1", items));
        mutate(swrKeys.getShow(review.show_id));
      },
    }
  );
  const { trigger: updateTrigger } = useSWRMutation(
    swrKeys.updateReview(review.id as string),
    updateReview,
    {
      onSuccess: () => {
        toast({
          title: "Review updated",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        mutate(swrKeys.getReviews(review.show_id, "1", items));
        mutate(swrKeys.getShow(review.show_id));
        onClose();
      },
    }
  );

  async function handleDeleting() {
    await deleteTrigger();
  }

  async function onUpdateReview(review: IReview) {
    await updateTrigger(review);
  }

  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              variant="none"
              aria-label="Options"
            >
              {isOpen ? (
                <i className="fa-solid fa-x"></i>
              ) : (
                <i className="fa-solid fa-ellipsis-vertical"></i>
              )}
            </MenuButton>
            <MenuList color="black">
              <MenuItem onClick={onOpen}>Edit</MenuItem>
              <MenuItem onClick={handleDeleting}>Delete</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          bg="purple.700"
          py="5"
          mx={["2", "auto"]}
        >
          <ModalHeader>Update review</ModalHeader>
          <ModalBody>
            <ReviewForm
              review={review}
              show_id={review.show_id}
              handleReview={onUpdateReview}
              mode="update"
            />
            <ButtonGroup pt="2">
              <Button
                type="submit"
                form="update"
                py={[2, 4]}
                px={[4, 8]}
              >
                Save
              </Button>
              <Button
                onClick={onClose}
                py={[2, 4]}
                px={[4, 8]}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}