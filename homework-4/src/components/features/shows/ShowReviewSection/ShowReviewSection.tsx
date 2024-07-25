'use client'
import ReviewForm from "@/components/features/shows/ReviewForm/ReviewForm";
import ReviewList from "@/components/features/reviews/ReviewList/ReviewList";
import { IReviewProps } from "@/typings/review";

export default function ReviewContainer({reviews, show, onAddReview} : IReviewProps){
  return (
    <div className="review-section">
      <ReviewForm handleReview={onAddReview} show_id={show.id} mode="create"/>
      <ReviewList reviews={reviews}/>
    </div>
  )
}