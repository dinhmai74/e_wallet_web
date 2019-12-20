import React from "react";
import { metrics } from "theme/metrics";

interface Props {
  message?: string;
  Img: any;
}

export const PageNotFound: React.FC<Props> = props => {
  const { message, Img } = props;
  return (
    <div className="pt-32">
      <Img
        width={metrics.img.md}
        height={metrics.img.md}
        className="mx-auto my-0"
      />
      <p className="text-center">{message}</p>
    </div>
  );
};

PageNotFound.defaultProps = {
  message: "Sorry we can find this movie this moment..."
};
