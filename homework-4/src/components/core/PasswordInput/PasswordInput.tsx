import { FormLabel, forwardRef, Input, InputGroup, InputLeftElement, InputProps, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./PasswordInput.module.css";

export const PasswordInput = forwardRef(({placeholder, ...inputProps}: InputProps, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <InputGroup>
      <Input
        ref={ref}
        {...inputProps}
        type={`${showPassword ? "text" : "password"}`}
        placeholder=""
      />
      <FormLabel>{placeholder}</FormLabel>
      <InputLeftElement>
        <i className="fa-solid fa-lock icon"></i>
      </InputLeftElement>
      <InputRightElement onClick={() => setShowPassword(prevState => !prevState)}>
        {showPassword && <i className={`fa-solid fa-eye-slash icon ${styles.icon}`}></i>}
        {!showPassword && <i className={`fa-solid fa-eye icon ${styles.icon}`}></i>}
      </InputRightElement>
    </InputGroup>
  )
});