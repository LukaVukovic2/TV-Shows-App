import { IReviewListProps } from "@/typings/review";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Flex } from "@chakra-ui/react";

export default function ReviewList({reviews}: IReviewListProps ) {
  return (
    <Flex flexDirection="column" pt={15}>
      {reviews.length === 0 ? 
        <p style={{margin: "10px 0"}}>No reviews yet</p> 
          :
        reviews.map((review, index) => {
          return (
            <ReviewItem
              key={index}
              review={review}
            />
          );
        })}
    </Flex>
  );
}