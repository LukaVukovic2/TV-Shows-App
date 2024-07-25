import { Box, Card, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import ImageWithFallback from "@/components/shared/utilities/ImageWithFallback/ImageWithFallback";
import styles from "./ShowDetails.module.css";
import { IShow } from "@/typings/show";

interface IShowDetailsProps {
  show: IShow;
}

export default function ShowDetails({show} : IShowDetailsProps) {
  const { title, description, image_url, no_of_reviews, average_rating } = show;

  return (
    <Card
      bg="white"
      color="navy"
      className={styles.showSection}
    >
      <Flex className={styles.showFlex}>
        <ImageWithFallback
          className={styles.showImage}
          src={image_url}
          alt={title}
          width={200}
          defaultHeight="960"
          defaultWidth="540"
        />
        <Box
          className={styles.showInfo}
          paddingLeft="4"
        >
          <Heading size="lg">{title}</Heading>
          <i
            className="fa-regular fa-star fa-lg"
            style={{ color: "#FFD43B" }}
          ></i>
          {!!average_rating && (
            <span className="averageRating">
              {` ${average_rating}/5 (${no_of_reviews}) `}
            </span>
          )}
          {!no_of_reviews && <span> No ratings</span>}
          <Text>{description}</Text>
        </Box>
      </Flex>
    </Card>
  );
}