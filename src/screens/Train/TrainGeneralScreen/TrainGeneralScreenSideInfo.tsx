import React from "react";
import styled from "styled-components";
import { images } from "theme";

export const TrainSideInfoBG = styled.div`
  background-color: #ddfafe;
  display: flex;
  flex-direction: column;
`;

export const TrainGeneralScreenSideInfo: React.FC = () => {
  return (
    <TrainSideInfoBG className="hidden lg:block min-w-3/5 pt-32 h-screen ">
      <img
        src={`${process.env.PUBLIC_URL}/${images.home.train}`}
        alt="illu"
        className="img__decorate"
      />

      <div className="color__blue-grey text__h4">
        <p className="text-center text__h2 font-medium my-8">Train Ticket</p>
        <div
          className="mx-auto justify-center w-full my-8 font-thin left-1/4  top-0 relative"
          style={{
            lineHeight: "2.5rem"
          }}
        >
          <p>Every time.</p>
          <p>Get there your way.</p>
          <p className="">Easy as 1, 2, 3.</p>
        </div>
      </div>
    </TrainSideInfoBG>
  );
};
