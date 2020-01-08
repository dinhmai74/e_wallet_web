import React from "react";
import { useCss } from "react-use";
import styled from "styled-components";
import { AppCard } from "components/AppCard";

interface Props {
  onClick?: () => void;
  src?: string;
}
export const ItemProvider: React.FC<Props> = props => {
  const { onClick, src } = props;
  let className = useCss({
    maxHeight: "120px",
    minHeight: "120px",
    minWidth: "200px"
  });

  className += " max-w-sm  cursor-pointer align-middle  my-12 mx-8 bg-white";

  return (
    <AppCard className={className} onClick={onClick}>
      <StyledImg
        src={`${process.env.PUBLIC_URL}/${src}`}
        alt="logo"
        className="mt-4"
      />
    </AppCard>
  );
};

const StyledImg = styled.img`
  max-width: 150px;
  max-height: 100px;
  width: auto;
  height: auto;
  margin: auto;
  vertical-align: middle;
`;
