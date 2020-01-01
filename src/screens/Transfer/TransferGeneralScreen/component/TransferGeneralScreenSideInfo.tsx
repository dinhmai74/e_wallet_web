import React from "react";
import { images } from "theme/images";

interface Props {}
export const TransferGeneralScreenSideInfo: React.FC<Props> = props => {
  return (
    <div className="w-2/6 bg__bg-5 min-h-screen hidden md:inline-block pt-64 flex-col">
      <img
        src={`${process.env.PUBLIC_URL}/${images.home.transfer}`}
        className="img__decorate--side mx-auto"
        alt="illu"
      />
      <div className="my-12">
        <p className="text-center text__h2 color__steel font-bold mb-4">
          Transfer phone
        </p>
        <p className="text-center  color__steel">
          With us, easy transfer easy get more time!
        </p>
      </div>
    </div>
  );
};
