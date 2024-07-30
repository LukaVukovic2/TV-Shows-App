"use client";
import ReviewForm from "@/components/features/shows/ReviewForm/ReviewForm";
import ReviewList from "@/components/features/reviews/ReviewList/ReviewList";
import { IReviewProps } from "@/typings/review";
import { Flex, Heading, chakra } from "@chakra-ui/react";
import Pagination from "@/components/shared/Pagination/Pagination";

export default function ReviewContainer({
  reviews,
  show,
  onAddReview,
  pagination
}: IReviewProps) {
  return (
    <Flex pt={10} direction={{ base: "column", lg: "row" }}>
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
        />
        {pagination && <Pagination pagination={pagination} />}
      </chakra.div>
    </Flex>
  );
}
