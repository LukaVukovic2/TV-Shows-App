import React, {useState} from "react";
import { Image, InputProps } from "@chakra-ui/react";

interface ImageWithFallbackProps extends InputProps {
  defaultHeight: string;
  defaultWidth: string;
}

export default function ImageWithFallback({
  src,
  alt,
  className,
  defaultHeight,
  defaultWidth
}: ImageWithFallbackProps) {
  const defaultImageSrc = `https://fakeimg.pl/${defaultHeight}x${defaultWidth}?text=No+image+found`;
  const [imgSrc, setImgSrc] = useState(src || defaultImageSrc);

  const handleImageError = () => {
    setImgSrc(defaultImageSrc);
  };

  return (
    <Image
      className={className}
      src={imgSrc}
      alt={alt}
      onError={handleImageError}
      objectFit="cover"
    />
  );
}
