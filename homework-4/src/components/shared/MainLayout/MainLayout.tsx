"use client";
import { useToast, chakra } from "@chakra-ui/react";
import React from "react";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import { createReview } from "@/fetchers/mutators";
import ShowReviewSection from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import ShowDetails from "@/components/features/shows/ShowDetails/ShowDetails";
import LoadingSpinner from "@/components/core/LoadingSpinner/LoadingSpinner";
import { IReview, IReviewList } from "@/typings/review";
import { IShow } from "@/typings/show";
import { useParams, useSearchParams } from "next/navigation";

interface IApiShowResponse {
  show: IShow;
}

export default function MainLayout() {
  const { id } = useParams<{ id: string }>();
  const toast = useToast();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') || '1';
  const items = "5"
  
  const {
    data: showData,
    error: errorShow,
    isLoading: isLoadingShow
  } = useSWR<IApiShowResponse>(swrKeys.getShow(id), fetcher, {
    revalidateOnFocus: false
  });
  const show = showData?.show as IShow;

  const {
    data: reviewData,
    error: errorReview,
    isLoading: isLoadingReview,
  } = useSWR<IReviewList>(swrKeys.getReviews(id, currentPage, items), fetcher, {
    revalidateOnFocus: false
  });
  const reviews: IReview[] = reviewData?.reviews || [];
  const pagination = reviewData?.meta?.pagination;
  
  const { trigger: addTrigger } = useSWRMutation(
    swrKeys.createReview,
    createReview,
    {
      onSuccess: () => {
        toast({
          title: "Review added",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        mutate(swrKeys.getShow(id));
        mutate(swrKeys.getReviews(id, currentPage, items));;
      },
    }
  );

  if (errorReview) return <div>No reviews available</div>;
  if (errorShow) return <div>No show available</div>;
  if (isLoadingReview) return <LoadingSpinner />;
  if (isLoadingShow) return <LoadingSpinner />;

  async function onAddReview(review: IReview) {
    await addTrigger(review);
  }

  return (
    <chakra.main>
      <ShowDetails show={show} />
      <ShowReviewSection
        reviews={reviews}
        show={show}
        onAddReview={onAddReview}
        pagination={pagination}
      />
    </chakra.main>
  );
}