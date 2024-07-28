/* interface StarIconProps {
  label: string;
  value: number;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} */
import styles from "./StarIcon.module.css";

import { forwardRef, Input } from "@chakra-ui/react";

interface StarIconProps {
  value: number;
  selected: boolean;
  onChange: (newValue: number) => void;
}

export const StarIcon = forwardRef(({ selected, value, onChange }: StarIconProps, ref) => {
  return (
    <label
      htmlFor="rating"
      className={styles.starLabel}
    >
      <Input
        name="rating"
        type="hidden"
        ref={ref}
      />
      <i
        className={`fa-regular fa-star ${selected && styles.starSelected}`}
        onClick={() => onChange(value)}
      ></i>
    </label>
  );
});
