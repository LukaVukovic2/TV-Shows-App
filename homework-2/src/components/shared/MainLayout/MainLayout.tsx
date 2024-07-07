"use client";
import styles from "./MainLayout.module.css";
import ShowReviewSection from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import ShowDetails from "@/components/features/shows/ShowDetails/ShowDetails";
import React, { useEffect } from "react";
import { useState } from "react";
import { IReview } from "@/typings/review";
import { IShow } from "@/typings/show";
import { Heading } from "@chakra-ui/react";
import { getItemFromLocalStorage, removeLocalStorageItem, saveToLocalStorage } from "@/components/shared/utilities/LocalStorage/LocalStorage";

const tvShow: IShow = {
  title: "Navy Cis Los Angeles",
  description:
  "Follows undercover agents assigned to the Office of Special Projects, a special branch of the Naval Criminal Investigative Service (NCIS)",
  averageRating: 0,
  imageUrl: "/images/navy-cis.jpg",
};

export default function MainLayout() {
  const [reviewArr, setReviewArr] = useState<IReview[]>([]);
  const [show, setShow] = useState<IShow>(tvShow);
  
  useEffect(() => {
    const arr = getItemFromLocalStorage();
    setReviewArr(arr);
  }, [])
  
  useEffect(() =>{
    calculateAverageRating(reviewArr);
  }, [reviewArr])


  function calculateAverageRating(reviews: IReview[]) {
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    const average = Number((sum / reviews.length).toFixed(2));
    setShow((prevShow) => ({
      ...prevShow,
      averageRating: average,
    }));
  }

  function onAddReview(review: IReview) {
    const newArray = [review, ...reviewArr];
    setReviewArr(newArray);
    saveToLocalStorage("reviewarray", newArray);
  }

  function onDeleteReview(reviewId: string) {
    const filteredArray = reviewArr.filter((review) => review.id !== reviewId);
    setReviewArr(filteredArray);
    if(!filteredArray.length){
      removeLocalStorageItem();
    }
    else{
      saveToLocalStorage("reviewarray", filteredArray);
    }
  }
  
  return (
    <main className={styles.main}>
      <Heading
        as="h1"
        size="xl"
        my={3}
      >
        TV shows APP
      </Heading>
      <ShowDetails show={show} />
      <Heading
        as="h2"
        size="lg"
        my={3}
      >
        Reviews
      </Heading>
      <ShowReviewSection
        reviews={reviewArr}
        onAddReview={onAddReview}
        onDeleteReview={onDeleteReview}
      />
    </main>
  );
}
