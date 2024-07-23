"use client";
import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";
import { useUser } from "@/hooks/useUser";
import { IApiResponseUser } from "@/typings/apiResponse";
import {
  Button,
  Card,
  Flex,
  Image,
  Input,
  Text,
  chakra,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function MyProfile() {
  const { data } = useUser() as { data: IApiResponseUser };
  const { register, handleSubmit } = useForm();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (res) => {
    console.log("Submitted file:", res.file[0]);
  };

  return (
    <>
      <AuthRedirect
        to="/login"
        isLoggedIn={false}
      />
      <Flex
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        direction="column"
        height="100%"
      >
        <Text
          fontSize="sm"
          fontWeight="bolder"
          textTransform="uppercase"
        >
          Email
        </Text>
        <Text
          fontSize="xl"
          fontWeight="bolder"
        >
          {data?.user.email}
        </Text>

        <chakra.form
          onSubmit={handleSubmit(onSubmit)}
          mt={10}
        >
          {!previewUrl && !data?.user?.image_url && (
            <label htmlFor="file-upload">
              <Card
                as={Flex}
                alignItems="center"
                variant="huge"
                style={{
                  padding: "85px 232px 74px 228px",
                  border: "2px dashed #371687",
                }}
                cursor="pointer"
              >
                <Input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  {...register("file", { onChange: onUploadImage })}
                  display="none"
                />
                <Image
                  src="images/uploadImage.svg"
                  alt="upload image"
                  width={139}
                />
                <Text
                  noOfLines={2}
                  fontSize="2xl"
                  fontWeight="bold"
                  color="lightPurple"
                >
                  Drop your photo here
                </Text>
              </Card>
            </label>
          )}

          {(previewUrl || data?.user.image_url) && (
            <Flex
              direction="column"
              alignItems="center"
            >
              <Image
                src={previewUrl || data.user.image_url}
                alt="Preview"
                width={260}
                borderRadius="50%"
                mb={12}
              />
              <Button
                variant="contained"
                fontSize="sm"
                fontWeight="regular"
                type="submit"
                px={45}
                py={5}
              >
                Upload image
              </Button>
            </Flex>
          )}
        </chakra.form>
      </Flex>
    </>
  );
}
