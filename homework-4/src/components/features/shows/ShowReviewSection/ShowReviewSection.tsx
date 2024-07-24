"use client";
import ReviewForm from "@/components/features/shows/ReviewForm/ReviewForm";
import ReviewList from "@/components/features/reviews/ReviewList/ReviewList";
import { IReviewProps } from "@/typings/review";
import { Flex, Heading, chakra } from "@chakra-ui/react";

export default function ReviewContainer({
  reviews,
  show,
  onAddReview,
  onDeleteReview,
}: IReviewProps) {
  return (
    <Flex py={10}>
      <Heading
        width={175}
        fontSize={["xl", "2xl"]}
        color="white"
      >
        Reviews
      </Heading>
      <chakra.div flex={1}>
        <ReviewForm
          handleReview={onAddReview}
          show_id={show.id}
          mode="create"
        />
        <ReviewList
          reviews={reviews}
          onDeleteReview={onDeleteReview}
        />
      </chakra.div>
    </Flex>
  );
}
