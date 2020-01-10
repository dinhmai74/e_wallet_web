import { AppCard } from "components/AppCard";
import React from "react";
import styled from "styled-components";

interface Props {
  src?: string;
}
export const PurchasedCard: React.FC<Props> = props => {
  const { src } = props;
  return (
    <AppCard className="max-w-full flex flex-row px-8 py-8 cursor-pointer mb-10 ">
      <StyledImg
        src={`${process.env.PUBLIC_URL}/${src}`}
        alt="illu"
        className="hidden md:inline-block"
      />
      <div className="flex flex-col justify-center item-center ml-4">
        <span className="text__h4 color__steel pb-4">
          <b className="text__h2 ">Viettel - </b>
          10,000d
        </span>
        <p className="text__b1 color__primary pb-4">24141634262</p>
        <p className="text__d1 color__blue-grey pb-4">Seri: 378219379123</p>
      </div>
    </AppCard>
  );
};

const StyledImg = styled.img`
  display: block;
  max-width: 150px;
  max-height: 120px;
`;
