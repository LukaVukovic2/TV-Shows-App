import { Flex, Hide, Image, chakra } from "@chakra-ui/react";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";

interface IPaginationProps {
  pagination: {
    count: number;
    items: number;
    page: number;
    pages: number;
  };
}

export default function Pagination({ pagination }: IPaginationProps) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || "1");
  const pages = pagination?.pages;
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      mt={5}
    >
        {
          currentPage > 1 && (
              <chakra.div
                borderRadius={4}
                p={3}
              >
                <NextLink href={`/all-shows?page=${currentPage - 1}`}>
                  <Image src="images/chevron_left.svg" alt="previous"/>
                </NextLink>
              </chakra.div>
          )
        }
        <chakra.div>
          {currentPage} of {pages}
        </chakra.div>
        {
          currentPage < pages && (
            <Hide below="sm">
              <chakra.div
                as={NextLink}
                p={3}
                href={`/all-shows?page=${currentPage + 1}`}
              >
                
                <Image src="images/chevron_right.svg" alt="next"/>
              </chakra.div>
            </Hide>
          )
        }
    </Flex>
  );
}
