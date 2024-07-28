import { Card, Heading, Text, Flex, chakra, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import ImageWithFallback from "@/components/shared/utilities/ImageWithFallback/ImageWithFallback";
import styles from "./ShowDetails.module.css";
import { IShow } from "@/typings/show";

interface IShowDetailsProps {
  show: IShow;
}

export default function ShowDetails({ show }: IShowDetailsProps) {
  const variant = useBreakpointValue({ sm: "sm", md: "md", lg: "lg" });
  const { title, description, image_url, no_of_reviews, average_rating } = show;

  return (
    <Card
      bg="white"
      color="purple.700"
      overflow="hidden"
    >
      <div className={styles.imgContainer}>
        <ImageWithFallback
          src={image_url}
          alt={title}
          width="100%"
          defaultHeight="960"
          defaultWidth="540"
        />
      </div>
      <Flex
        direction={["column", "column", "row"]}
        justifyContent="space-between"
        gap={5}
        p={10}
      >
        <chakra.div flex={1}>
          <Heading
            variant={variant}
          >
            {title}
          </Heading>
          {!!average_rating && (
            <>
              <Text
                className="averageRating"
                fontSize={["xl", "2xl"]}
              >
                <i className="fa-solid fa-star fa-md"></i>
                {` ${average_rating}/5 (${no_of_reviews}) `}
              </Text>
            </>
          )}
          {!no_of_reviews && <Text fontSize={["sm", "xl"]}> No ratings</Text>}
        </chakra.div>
        <chakra.div flex={1}>
          <Text fontSize={["sm", "md", "xl"]}>{description}</Text>
        </chakra.div>
      </Flex>
    </Card>
  );
}
