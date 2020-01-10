import { AppAvatar } from "components/AppAvatar";
import React from "react";
import { animated } from "react-spring";
import { useHoverEffect } from "utils/animations/useAnimations";

interface Props {
  src: string;
  name: string;
}

export const CastAvatar: React.FC<Props> = props => {
  const { name } = props;
  // not real data so we rando img
  const id = Math.floor(Math.random() * 1000) + 1;
  const [anim, set, calc, trans] = useHoverEffect();

  return (
    <animated.div
      // @ts-ignore
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      // @ts-ignore
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      // @ts-ignore
      style={{ transform: anim.xys.interpolate(trans) }}
    >
      <AppAvatar src={`https://picsum.photos/id/${id}/200/300`} name={name} />
    </animated.div>
  );
};

CastAvatar.defaultProps = {};
