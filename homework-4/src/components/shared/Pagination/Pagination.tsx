import { Flex, Image, chakra } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface IPaginationProps {
  pagination: {
    count: number;
    items: number;
    page: number;
    pages: number;
  };
}

export default function Pagination({ pagination }: IPaginationProps) {
  const path = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || "1");
  const pages = pagination?.pages;
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      mt={5}
      width="100%"
      textAlign="center"
    >
      {
        currentPage > 1 && (
          <chakra.div
            borderRadius={4}
            p={3}
          >
            <NextLink href={`${path}?page=${currentPage - 1}`}>
              <Image src="/images/chevron_left.svg" alt="previous"/>
            </NextLink>
          </chakra.div>
        )
      }
      {
        pagination.count > 0 &&
        <chakra.div>
          {currentPage} of {pages}
        </chakra.div>
      }
      {
        currentPage < pages && (
          <chakra.div
            as={NextLink}
            p={3}
            href={`${path}?page=${currentPage + 1}`}
          >
            
            <Image src="/images/chevron_right.svg" alt="next"/>
          </chakra.div>
        )
      }
    </Flex>
  );
}
