import { AppCard } from "components/AppCard";
import React from "react";
import { animated } from "react-spring";
import { useCss } from "react-use";
import styled from "styled-components";
import { useHoverEffect } from "utils/animations/useAnimations";

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

  const [anim, set, calc, trans] = useHoverEffect();

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      // @ts-ignore
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      // @ts-ignore
      style={{ transform: anim.xys.interpolate(trans) }}
    >
      <AppCard className={className} onClick={onClick}>
        <StyledImg
          src={`${process.env.PUBLIC_URL}/${src}`}
          alt="logo"
          className="mt-4"
        />
      </AppCard>
    </animated.div>
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
