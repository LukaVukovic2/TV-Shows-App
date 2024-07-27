"use client";
import React from "react";
import { IReview, IReviewFormProps } from "@/typings/review";
import { StarIcon } from "../StarIcon/StarIcon";
import {
  Button,
  chakra,
  Flex,
  FormControl,
  FormErrorMessage,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

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

  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
    control
  } = useForm<IFormData>({
    defaultValues: {
      rating: review?.rating || 0,
    },
  });

  const onSubmit = ({ comment, rating }: IFormData) => {
    const newReview: IReview = {
      comment,
      rating,
      show_id,
    };
    handleReview(newReview);
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
          id="reviewComment"
          placeholder={mode == "create" ? "Add review" : "Edit review"}
          defaultValue={review?.comment}
          tabIndex={1}
          my={3}
        ></Textarea>
        <FormErrorMessage>
          {errors.comment && errors.comment.message}
        </FormErrorMessage>
      </FormControl>
      <Flex gap={{base: 1, md: 2.5}} alignItems="baseline" justify="space-between">
        <Controller
          control={control}
          name="rating"
          rules={{
            required: true,
            min: { value: 1, message: "Rating must be between 1 and 5" },
            max: { value: 5, message: "Rating must be between 1 and 5" }
          }}
          render={({ field: { onChange, value } }) => (
            <Flex fontSize={["sm", "xl"]}>
              <Text mr={2}>Rating</Text>
              {Array.from({ length: 5 }).map((_, index) => {
                const starValue = index + 1;
                return (
                  <StarIcon
                    key={index}
                    value={starValue}
                    selected={value >= starValue}
                    onChange={onChange}
                  />
                );
              })}
            </Flex>
          )}
        >

        </Controller>

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
