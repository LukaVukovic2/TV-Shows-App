import { Card, CardHeader, CardBody, Heading, Flex } from "@chakra-ui/react";
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
      <CardBody
        color="purple.700"
        display={["unset", "flex"]}
        alignItems={["unset", "flex-end"]}
      >
        <Flex
          direction={["row", "column"]}
          justify="space-between"
          alignItems={["center", "unset"]}
        >
          <Heading fontSize={["lg", "xl"]}>{show.title}</Heading>
          <Flex
            alignItems="center"
            wrap="nowrap"
            fontSize="md"
            gap={1}
          >
            <i className="fa-solid fa-star fa-md"></i>
            {show.average_rating && show.average_rating + "/5"}
            {!show.average_rating && " Not rated yet"}
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
