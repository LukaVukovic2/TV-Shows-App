"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./ReviewForm.module.css";
import { IReviewFormProps } from "@/typings/review";
import StarIcon from "../StarIcon/StarIcon";
import {
  Button,
  chakra,
  Flex,
  FormControl,
  FormErrorMessage,
  Textarea,
  Input,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { resetingRatingStars, styleRatingStars } from "@/components/shared/utilities/RatingStarsStyle/RatingStarsStyle";

interface IFormData {
  comment: string;
  rating: number;
}

export default function ReviewForm({
  handleReview,
  show_id,
  review,
  mode,
}: IReviewFormProps) {
  useEffect(() => {
    styleRatingStars(starsParent, review?.rating || 0);
  }, []);

  const [rating, setRating] = useState(review?.rating);
  const starsParent = useRef<HTMLDivElement>(null);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    reset,
    trigger,
  } = useForm<IFormData>({
    defaultValues: {
      rating: review?.rating || 0,
    },
  });

  function onRatingInputSelection(event: React.ChangeEvent<HTMLInputElement>) {
    const currentRating = Number(event.target.value);
    setRating(currentRating);
  }

  function onRatingChange(event: React.ChangeEvent<HTMLInputElement>) {
    const currentRating = Number(event.target.value);
    styleRatingStars(starsParent, currentRating);
    setValue("rating", currentRating);
    trigger("rating");
  }

  const onSubmit = ({ comment, rating }: IFormData) => {
    const newReview = {
      comment,
      rating,
      show_id
    };
    handleReview(newReview);
    setRating(0);
    resetingRatingStars(starsParent);
    reset();
  };

  function onError() {
    toast({
      title: "Review not posted",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <chakra.form
      id={mode}
      className={styles.reviewForm}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormControl
        isInvalid={!!errors.comment}
        isDisabled={isSubmitting}
      >
        <Textarea
          {...register("comment")}
          color="black"
          bg="white"
          className={styles.reviewComment}
          id="reviewComment"
          placeholder={mode == "create" ? "Add review" : "Edit review"}
          defaultValue={review?.comment}
          tabIndex={1}
        ></Textarea>
        <FormErrorMessage>
          {errors.comment && errors.comment.message}
        </FormErrorMessage>
      </FormControl>
      <Flex alignItems="center">
        <FormControl
          isInvalid={!!errors.rating}
          isDisabled={isSubmitting}
        >
          <Flex gap={{base: 1, md: 2.5}} alignItems="baseline">
            <Text fontSize={["xs", "xl"]}>Rating</Text>
            <Input
              type="hidden"
              {...register("rating", {
                required: "Rating is required",
                min: { value: 1, message: "Rating must be between 1 and 5" },
                max: { value: 5, message: "Rating must be between 1 and 5" },
              })}
              value={rating || 0}
            />
            <Flex
              className={styles.reviewRating}
              id="reviewRating"
              ref={starsParent as React.RefObject<HTMLDivElement>}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon
                  key={index}
                  label="rating"
                  value={5 - index}
                  onBlur={onRatingInputSelection}
                  onChange={onRatingChange}
                />
              ))}
            </Flex>
          </Flex>
          <FormErrorMessage>
            {errors.rating && errors.rating.message}
          </FormErrorMessage>
        </FormControl>

        {mode == "create" && (
          <div>
            <Button
              fontSize="sm"
              px={{ base: 7, md: 12 }}
              py={{ base: 3, md: 5 }}
              form="create"
              className="reviewPostBtn"
              type="submit"
              tabIndex={3}
              isDisabled={!isValid || isSubmitting}
            >
              Post
            </Button>
          </div>
        )}
      </Flex>
    </chakra.form>
  );
}
