import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IShow } from "@/typings/show";
import ImageWithFallback from "../utilities/ImageWithFallback/ImageWithFallback";

export default function ShowCard({ show }: { show: IShow }) {
  return (
    <Card
      as={NextLink}
      href={`/shows/${show.id}`}
      passHref
      overflow="hidden"
      variant="secondary"
      w={["auto", "240px"]}
    >
      <CardHeader p={0}>
        <ImageWithFallback
          src={show.image_url || ""}
          alt="show image"
          width={1200}
          defaultWidth="1200"
          defaultHeight="800"
        />
      </CardHeader>
      <CardBody color="purple2">
        <Flex
          direction={["row", "column"]}
          justify="space-between"
        >
          <Heading fontSize={["lg", "xl"]}>{show.title}</Heading>
          <Flex
            alignItems="center"
            wrap="nowrap"
            fontSize="md"
          >
            <i className="fa-solid fa-star fa-md"></i>
            {show.average_rating && show.average_rating.toFixed(1) + "/5"}
            {!show.average_rating && " Not rated yet"}
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
