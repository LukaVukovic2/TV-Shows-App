'use client'
import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";
import { useUser } from "@/hooks/useUser";
import { chakra, Flex, Text } from "@chakra-ui/react";
import { IApiResponseUser} from "@/typings/apiResponse";

export default function MyProfile() {
  const { data } = useUser() as { data: IApiResponseUser };
  
  return (
    <>
      <AuthRedirect to="/login" isLoggedIn={false}/>
      <Flex justifyContent="center" alignItems="center" wrap="wrap" direction="column">
        <Text>email</Text>
        <Text>{data?.user.email}</Text>
        <chakra.div>

        </chakra.div>
      </Flex>
    </>
  );
}