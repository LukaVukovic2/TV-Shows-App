import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";
import MainLayout from "@/components/shared/MainLayout/MainLayout";

export default function SpecificShowPage() {
  return (
    <>
      <AuthRedirect to="/login" isLoggedIn={false}/>
      <MainLayout/>
    </>
  )
}
