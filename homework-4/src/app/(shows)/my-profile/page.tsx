"use client";
import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";
import { useUser } from "@/hooks/useUser";
import { Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import { IApiResponseUser } from "@/typings/apiResponse";

export default function MyProfile() {
  const { data } = useUser() as { data: IApiResponseUser };

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
        <Text>email</Text>
        <Text>{data?.user.email}</Text>
        <Card
          variant="huge"
          style={{
            padding: "85px 232px 74px 228px",
            border: "2px solid #371687",
          }}
          textAlign="center"
        >
          {data?.user.image_url ? (
            <Image
              src={data?.user.image_url}
              alt={data?.user.email}
              width={260}
              borderRadius="50%"
            />
          ) : (
            <>
            <Button variant="unset">
              <Image
                src="images/uploadImage.svg"
                alt="upload image"
                width={139}
              />
            </Button>
            <Text noOfLines={2}>Drop your photo here</Text>
            </>
          )}
        </Card>
      </Flex>
    </>
  );
}
