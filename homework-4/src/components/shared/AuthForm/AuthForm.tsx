"use client";
import { chakra, Flex, FormControl, Input, FormErrorMessage, Button, Text, InputLeftElement, 
  InputGroup, 
  useToast} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@/hooks/useUser";
import LogoImage from "@/components/core/LogoImage/LogoImage";
import {PasswordInput} from "@/components/core/PasswordInput/PasswordInput";
import AuthRedirect from "../AuthRedirect/AuthRedirect";
import { mutator } from "@/fetchers/mutators";
import useSWRMutation from "swr/mutation";
import IFormData from "@/typings/form";

interface IAuthFormProps {
  isLogin: boolean;
  swrKey: string;
}

export default function AuthForm({ isLogin, swrKey }: IAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<IFormData>();

  const toast = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const { mutate } = useUser();
  const { trigger } = useSWRMutation(swrKey, mutator, {
    onSuccess: (resData) => {
      toast({
        title: `You have successfully ${isLogin ? "logged in!" : "signed up!"}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      mutate(resData, { revalidate: false });
    },
    onError: () => {
      reset();
      toast({
        title: 
          isLogin ? 
            "Email or password is incorrect. Please try again." : 
            "Email is invalid or taken. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
  });
  const password = watch('password', '');
  const onSubmit = async (data: IFormData) => {
    await trigger(data);
  };

  return (
    <>
      <AuthRedirect
        to="/all-shows" 
        isLoggedIn={true}
      />

      <chakra.form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex
          direction="column"
          alignItems="center"
          gap="31px"
        >
          <LogoImage width={199} />
          <FormControl
            isInvalid={!!errors.email}
            isDisabled={isSubmitting}
          >
            <InputGroup>
              <Input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address',
                  }
                })}
                type="email"
                placeholder="Email"
              />
              <InputLeftElement>
                <i className="fa-solid fa-user"></i>
              </InputLeftElement>
            </InputGroup>
            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            isInvalid={!!errors.password}
            isDisabled={isSubmitting}
          >
            <PasswordInput
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                },
              })}
              placeholder="Password"
            />
            {errors.password && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>

          {!isLogin && (
            <FormControl
              isInvalid={!!errors.password_confirmation}
              isDisabled={isSubmitting}
            >
              <PasswordInput
                {...register("password_confirmation", {
                  required: "Password confirmation is required",
                  validate: value =>
                    value == password || "Passwords must match"
                })}
                placeholder="Confirm password"
              />
              {errors.password_confirmation && (
                <FormErrorMessage>
                  {errors.password_confirmation.message}
                </FormErrorMessage>
              )}
            </FormControl>
          )}
          <Button
            fontSize="sm"
            type="submit"
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
          >
            {!isLogin ? "Sign up" : "Log in"}
          </Button>
          <Text fontSize="sm" lineHeight="15px">
            {isLogin && (
              <>
                {`Don't have an account?`}
                <Link href="/register"> 
                  <b> Register</b>
                </Link>
              </>
            )}
            {!isLogin && (
              <>
                Already have an account?
                <Link href="/login"> 
                  <b> Login</b>
                </Link>
              </>
            )}
          </Text>
        </Flex>
      </chakra.form>
    </>
  );
}