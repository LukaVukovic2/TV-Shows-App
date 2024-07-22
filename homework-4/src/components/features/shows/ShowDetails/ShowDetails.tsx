import { Box, Card, Heading, Text, Flex, chakra } from "@chakra-ui/react";
import React from "react";
import ImageWithFallback from "@/components/shared/utilities/ImageWithFallback/ImageWithFallback";
import styles from "./ShowDetails.module.css";
import { IShow } from "@/typings/show";

interface IShowDetailsProps {
  show: IShow;
  tempShow: { sumOfRatings: number; noOfReviews: number };
}

export default function ShowDetails({ show, tempShow }: IShowDetailsProps) {
  const { title, description, image_url } = show;
  const { sumOfRatings, noOfReviews } = tempShow;

  return (
    <Card
      bg="white"
      color="navy"
      overflow="hidden"
    >
      <div className={styles.imgContainer}>
        <ImageWithFallback
          className={styles.showImage}
          src={image_url}
          alt={title}
          width="100%"
          defaultHeight="960"
          defaultWidth="540"
        />
      </div>
      <Flex className={styles.showFlex} justifyContent="space-between" p={10}>
        <chakra.div flex={1}>
          <Heading size="lg">{title}</Heading>
          <i
            className="fa-solid fa-star fa-md"
          ></i>
          {!!noOfReviews && (
            <span className="averageRating">
              {" "}
              {(sumOfRatings / noOfReviews).toFixed(1)}/5
            </span>
          )}
          {!noOfReviews && <span> No ratings</span>}

        </chakra.div>
        <chakra.div flex={1}>
          <Text>{description}</Text>
        </chakra.div>
      </Flex>
    </Card>
  );
}