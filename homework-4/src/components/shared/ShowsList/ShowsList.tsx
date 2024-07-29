import ShowCard from "../ShowCard/ShowCard";
import { Flex } from "@chakra-ui/react";
import { IShow } from "@/typings/show";
import Pagination from "../Pagination/Pagination";

interface IShowListProps{
  shows: Array<IShow>;
  pagination?: {
    count: number;
    items: number;
    page: number;
    pages: number;
  };
}

export default function ShowsList({shows, pagination}: IShowListProps) {
  return (
    <>
      <Flex
        wrap="wrap"
        gap={8}
        justifyContent={["center", "center", "center", "flex-start"]}
      >
        {
          shows.map((show) => (
            <ShowCard
              key={show.id}
              show={show}
            />
          ))
        }
      </Flex>
      {pagination && <Pagination pagination={pagination} />}
    </>
  );
}