'use client'
import { Alert, AlertIcon, chakra, Flex, FormControl, Input, FormErrorMessage, Button, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form"
import LogoImage from "@/components/core/LogoImage/LogoImage"
import styles from "./AuthForm.module.css"
import Link from "next/link"
import IFormData from "@/typings/form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useSWRMutation from "swr/mutation";
import { mutator } from "@/fetchers/mutators";
import AuthRedirect from "../AuthRedirect/AuthRedirect";
import { useUser } from "@/hooks/useUser";

interface IAuthFormProps {
  schema: yup.ObjectSchema<{
    email: string;
    password: string;
    password_confirmation?: string | undefined;
  }, yup.AnyObject, {
    email: undefined;
    password: undefined;
    password_confirmation?: undefined;
  }, "">;
  isLogin: boolean;
  swrKey: string;
}

export default function AuthForm({schema, isLogin, swrKey}: IAuthFormProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { mutate } = useUser();
  const { trigger } = useSWRMutation(swrKey, mutator, {
    onSuccess: (resData) => {
      setIsSuccess(true);
      mutate(resData, {'revalidate': false});
      if(error) setError(false);
    },
    onError: () => {
      setError(true);
      reset();
    }
  });

  const onSubmit = async (data: IFormData) => {
    await trigger(data);
  };

  return (
    <>
    <AuthRedirect to="/shows/all-shows" isLoggedIn={true}/>
    {
      error && 
        <Alert status="error" color="darkred">
          <AlertIcon />
          {isLogin && "Email or password is incorrect. Please try again."}
          {!isLogin && "Email is invalid or taken. Please try again."}
        </Alert>
    }
    {
      isSuccess && 
        <Alert status="success" color="darkgreen">
          <AlertIcon />
          You have successfully authenticated!
        </Alert>
    }
    {
      !isSuccess &&
        <chakra.form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" alignItems="center" gap={8}>
            <LogoImage width={200} />
            <FormControl isInvalid={!!errors.email}>
              <Input {
                ...register("email", {required: "true"})
              } 
                type="email" 
                placeholder="Email" />
              {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
            </FormControl>

            <FormControl position="relative" isInvalid={!!errors.password}>
              <Input {
                ...register("password", {required: "true"})
              } 
                type="password" 
                placeholder="Password" />
              {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
            </FormControl>
            
            {
              !isLogin &&
                <FormControl isInvalid={!!errors.password_confirmation}>
                  <Input {
                    ...register("password_confirmation", {required: "true"})
                  } 
                    type="password" 
                    placeholder="Confirm password" />
                  {errors.password_confirmation && <FormErrorMessage>{errors.password_confirmation.message}</FormErrorMessage>}
                </FormControl>
            }

            <Button type="submit" borderRadius={20} px={7} py={2} color="rgb(55,22,135)">
              {!isLogin ? "Sign up" : "Login"}
            </Button>
            <Text>
              {isLogin && 
                <>
                  {`Don't have an account?`}
                  <Link href="/register"> Register</Link>
                </>
              }
              {!isLogin && 
                <>
                  Already have an account?
                  <Link href="/login"> Login</Link>
                </>
              }
            </Text>     
          </Flex>
        </chakra.form>
      }
    </>
  )
}