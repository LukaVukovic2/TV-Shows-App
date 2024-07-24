'use client';
import { useParams } from "next/navigation";
import useSWR from "swr";
import MainLayout from "@/components/shared/MainLayout/MainLayout";
import LoadingSpinner from "@/components/core/LoadingSpinner/LoadingSpinner";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { IShow } from "@/typings/show";
import { Flex } from "@chakra-ui/react";

interface ApiResponse {
  show: IShow;
}

export default function ShowDetailsPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR<ApiResponse>(swrKeys.getShow(id as string), fetcher);
  const show = data?.show;
  
  if (error) {
    return <div>No show available</div>;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Flex justify={["center", "flex-end"]}>
      {show && <MainLayout tvShow={show} />}
    </Flex>
  );
}
