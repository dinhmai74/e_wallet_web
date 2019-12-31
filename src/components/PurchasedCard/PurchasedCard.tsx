import React from "react";
import styled from "styled-components";

interface Props {
  src?: string;
}
export const PurchasedCard: React.FC<Props> = props => {
  const { src } = props;
  return (
    <div className="max-w-full flex flex-row overflow-hidden shadow-md pl-8 py-4 cursor-pointer mb-6 ">
      <StyledImg src={`${process.env.PUBLIC_URL}/${src}`} alt="illu" />
      <div className="flex flex-col justify-center item-center pl-12">
        <div className="flex flex-row">
          <p className="text__h2 color__grey pb-4">Viettet -</p>
          <p className="text__h4 color__steel pb-4 pt-1 pl-6">10,000d</p>
        </div>
        <p className="text__b1 color__primary pb-4">24141634262</p>
        <p className="text__d1 color__blue-grey pb-4">Seri: 378219379123</p>
      </div>
    </div>
  );
};

const StyledImg = styled.img`
  display: block;
  max-width: 150px;
  max-height: 120px;
`;
