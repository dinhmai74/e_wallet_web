import { useSpring, useTransition } from "react-spring";

export const useFadeIn = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  return fadeIn;
};

export const useScaleAndFadeIn = () => {
  const props = useSpring({
    from: { opacity: 0, transform: "scale(0)" },
    to: { opacity: 1, transform: "scale(1)" }
  });

  return props;
};

export const useFadeOut = (): [any, any] => {
  const [fadeOut, set] = useSpring(() => ({
    from: { opacity: 1 },
    to: { opacity: 0 }
  }));

  return [fadeOut, set];
};

export const useScaleAndFadeOut = (): [any, any] => {
  const [fadeOut, setFadeOut] = useSpring(() => ({
    opacity: 1,
    transform: "scale(1)"
  }));

  const set = () => {
    setFadeOut({
      opacity: 0,
      transform: "scale(0)"
    });
  };

  return [fadeOut, set];
};

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const useHoverEffect = (): [any, any, any, any] => {
  const [p, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return [p, set, calc, trans];
};

export const useScaleGroup = (data: any[]): any => {
  const transitions = useTransition(data, (item: any) => data.indexOf(item), {
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });

  return transitions;
};
