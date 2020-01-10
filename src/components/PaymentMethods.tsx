import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { animated } from "react-spring";
import { useCss } from "react-use";
import styled from "styled-components";
import { useHoverEffect } from "utils/animations/useAnimations";

interface Props {
  className?: string;
  onChange: () => void;
}

export const PaymentMethods: React.FC<Props> = props => {
  const { className, onChange } = props;
  const [selectedIdx, setUselectedIdx] = React.useState<number>(-1);

  const setSelected = (idx: number) => {
    setUselectedIdx(idx);
    onChange();
  };

  const data = ListMethods(setSelected, selectedIdx);
  return (
    <div className={className}>
      <p className="text__h3 color__steel ">Methods: </p>

      <ScrollMenu
        alignCenter={false}
        data={data}
        arrowLeft={ArrowLeft()}
        arrowRight={ArrowRight()}
        useButtonRole={false}
      />
    </div>
  );
};

const baseURL = process.env.PUBLIC_URL + "/asset/images/payment/";
const paymentSrc: string[] = [
  baseURL + "meo.png",
  baseURL + "acb.png",
  baseURL + "visa.png",
  baseURL + "vietcom@3x.png",
  baseURL + "mb@3x.png",
  baseURL + "city.png"
];

const ArrowLeft = () => <ArrowBackIos />;
const ArrowRight = () => <ArrowForwardIos />;

const ListMethods = (onChange: (idx: number) => void, selectedIdx?: number) => {
  return paymentSrc.map((val, idx) => {
    return (
      <PaymentCard
        key={val}
        val={val}
        idx={idx}
        onChange={onChange}
        selectedIdx={selectedIdx}
      />
    );
  });
};

const PaymentCard: React.FC<{
  selectedIdx?: number;
  idx: number;
  val: string;
  onChange: (idx: number) => void;
}> = ({ selectedIdx, idx, val, onChange }) => {
  const [props, set, calc, trans] = useHoverEffect();
  let hlight = "";
  if (selectedIdx === idx) {
    hlight += " border-primary border border-solid";
  } else if (selectedIdx !== -1) {
    hlight = " opacity-25";
  }
  const className = useCss({
    minWidth: "140px",
    minHeight: "80px"
  });
  return (
    <animated.div
      className={
        "max-w-sm rounded overflow-hidden shadow-card cursor-pointer  my-12 mx-8 " +
        className +
        hlight
      }
      key={idx}
      onClick={() => onChange(idx)}
      // @ts-ignore
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      // @ts-ignore
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      // @ts-ignore
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <StyledImg src={val} alt="logo" className="mx-8 my-4" />
    </animated.div>
  );
};

const StyledImg = styled.img`
  display: block;
  max-width: 90px;
  max-height: 50px;
  width: auto;
  height: auto;
  margin: auto;
`;
