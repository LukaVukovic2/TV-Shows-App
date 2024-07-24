import { Flex, Avatar, Text, Card, chakra } from "@chakra-ui/react";
import { useUser } from "@/hooks/useUser";
import ReviewOptionDropdown from "../ReviewOptionDropdown/ReviewOptionDropdown";
import { IApiResponseUser } from "@/typings/apiResponse";
import { IReviewItemProps } from "@/typings/review";

export default function ReviewItem({
  review,
  onDeleteReview,
}: IReviewItemProps) {
  const { data } = useUser() as { data: IApiResponseUser };

  return (
    <Card
      variant="medium"
      px={10}
      py={7}
      mb={7}
    >
      <Flex
        justify="space-between"
        gap={4}
        wrap="wrap"
      >
        <Flex
          width="300px"
        >
          <Avatar
            mr={2}
            width={10}
            height={10}
            src={review.user?.image_url !== null ? review.user?.image_url : ""}
          />
          <Flex direction="column">
            <Text fontSize={["sm", "md"]} fontWeight="bold">{review.user?.email}</Text>
            <Flex gap={2}>

              <Text fontSize={["sm", "md"]}>{review.rating} / 5</Text>
              <p
                data-rating-index={review.id}
              >
                {Array.from({ length: 5 }, (_, index) => {
                  if (index >= review.rating) {
                    return (
                      <i
                        key={index}
                        className="fa-regular fa-star"
                      ></i>
                    );
                  } else {
                    return (
                      <i
                        key={index}
                        className="fa-solid fa-star"
                      ></i>
                    );
                  }
                })}
              </p>
            </Flex>
          </Flex>
        </Flex>
        <chakra.div flex={3}>
          <Text fontSize={["sm", "md"]}>{review.comment}</Text>
        </chakra.div>
        <chakra.div>
          {data?.user.id === review.user?.id && (
            <ReviewOptionDropdown
              onDeleteReview={onDeleteReview}
              review={review}
            />
          )}

        </chakra.div>
      </Flex>
    </Card>
  );
}
