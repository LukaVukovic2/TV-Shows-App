"use client";
import { Alert, AlertIcon, chakra, Flex, FormControl, Input, FormErrorMessage, Button, Text, InputLeftElement, InputGroup,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@/hooks/useUser";
import LogoImage from "@/components/core/LogoImage/LogoImage";
import PasswordInput from "@/components/core/PasswordInput/PasswordInput";
import AuthRedirect from "../AuthRedirect/AuthRedirect";
import { mutator } from "@/fetchers/mutators";
import styles from "./AuthForm.module.css";
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

  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { mutate } = useUser();
  const { trigger } = useSWRMutation(swrKey, mutator, {
    onSuccess: (resData) => {
      setIsSuccess(true);
      mutate(resData, { revalidate: false });
      if (error) setError(false);
    },
    onError: () => {
      setError(true);
      reset();
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
      {error && (
        <Alert
          status="error"
          color="darkred"
        >
          <AlertIcon />
          {isLogin && "Email or password is incorrect. Please try again."}
          {!isLogin && "Email is invalid or taken. Please try again."}
        </Alert>
      )}
      {isSuccess && (
        <Alert
          status="success"
          color="darkgreen"
        >
          <AlertIcon />
          You have successfully authenticated!
        </Alert>
      )}
      {!isSuccess && (
        <chakra.form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Flex
            direction="column"
            alignItems="center"
            gap={8}
          >
            <LogoImage width={200} />
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
                register={register("password", { 
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
                  register={register("password_confirmation", {
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
              type="submit"
              borderRadius={20}
              px={7}
              py={2}
              color="rgb(55,22,135)"
              textTransform="uppercase"
              fontSize="0.8rem"
              isLoading={isSubmitting}
            >
              {!isLogin ? "Sign up" : "Login"}
            </Button>
            <Text>
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
      )}
    </>
  );
}
