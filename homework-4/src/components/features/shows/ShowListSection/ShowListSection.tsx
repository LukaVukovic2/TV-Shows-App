"use client";
import useSWR from "swr";
import LoadingSpinner from "@/components/core/LoadingSpinner/LoadingSpinner";
import ShowsList from "@/components/shared/ShowsList/ShowsList";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IShowList } from "@/typings/show";
import { useSearchParams } from 'next/navigation'

export default function ShowListSection() {
  const searchParams = useSearchParams()
  const currentPage = searchParams.get('page') || '1';
  const items = "12";

  const { data, error, isLoading } = useSWR<IShowList>(swrKeys.getShowsByPage(currentPage, items), fetcher, {
    revalidateOnFocus: false
  });
  const shows = data?.shows || [];
  const pagination = data?.meta?.pagination;
  
  if (error) return <div>No shows available</div>;
  if (isLoading) return <LoadingSpinner/>;
  
  return <ShowsList shows={shows} pagination={pagination}/>
}
