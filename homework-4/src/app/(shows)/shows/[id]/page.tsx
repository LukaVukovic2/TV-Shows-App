import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";
import MainLayout from "@/components/shared/MainLayout/MainLayout";
import { Flex } from "@chakra-ui/react";

export default function SpecificShowPage() {
  return (
    <>
      <AuthRedirect to="/login" isLoggedIn={false}/>
      <Flex justify={["center", "flex-end"]}>
        <MainLayout/>
      </Flex>
    </>
  )
}