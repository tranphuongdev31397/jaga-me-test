import "react-lazy-load-image-component/src/effects/blur.css";
import {
  LazyLoadImage,
  type LazyLoadImageProps,
} from "react-lazy-load-image-component";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ImageProps extends LazyLoadImageProps {}

const Image = ({ className, src, ...rest }: ImageProps) => {
  return (
    <LazyLoadImage
      style={{
        display: "block!important",
      }}
      src={src}
      className={cn(className)}
      // onLoad={(e) => (e.currentTarget.src = IMAGE.no_image)}
      {...rest}
    />
  );
};

export default Image;
