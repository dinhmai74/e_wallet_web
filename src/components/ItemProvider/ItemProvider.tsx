import React from "react";
import styled from "styled-components";

interface Props {
  onClick?: () => void;
  src?: string
}
export const ItemProvider: React.FC<Props> = props => {
  const { onClick, src } = props;
  return (
    <div className="max-w-sm rounded-lg overflow-hidden px-12 py-4 mb-20 bg-white shadow-md  cursor-pointer mr-20" onClick={onClick}>
     <StyledImg src={`${process.env.PUBLIC_URL}/${src}`} alt="logo" />
    </div>
  );
};

const StyledImg = styled.img`
  display: block;
  max-width: 200px;
  max-height: 120px;
  padding-left: 50px;
  padding-right: 50px;
`;
