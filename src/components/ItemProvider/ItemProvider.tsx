import React from "react";
import styled from "styled-components";
import { useCss } from "react-use";

interface Props {
  onClick?: () => void;
  src?: string;
}
export const ItemProvider: React.FC<Props> = props => {
  const { onClick, src } = props;
  let className = useCss({
    minWidth: "200px",
    minHeight: "120px",
    maxHeight: "120px"
  });

  className +=
    " max-w-sm rounded overflow-hidden shadow-card cursor-pointer  my-12 mx-8 bg-white";

  return (
    <div className={className} onClick={onClick}>
      <StyledImg src={`${process.env.PUBLIC_URL}/${src}`} alt="logo" className="mx-8 my-4"/>
    </div>
  );
};

const StyledImg = styled.img`
  display: block;
  max-width: 150px;
  max-height: 100px;
  width: auto;
  height: auto;
  margin: auto;
`;
