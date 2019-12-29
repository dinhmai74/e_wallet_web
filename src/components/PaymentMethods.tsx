import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import styled from "styled-components";
import { useCss } from "react-use";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

interface Props {
  className?: string;
}

export const PaymentMethods: React.FC<Props> = props => {
  const { className } = props;
  const [selectedIdx, setUselectedIdx] = React.useState<number>(-1);
  const data = ListMethods(idx => setUselectedIdx(idx), selectedIdx);
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
  const className = useCss({
    minWidth: "140px",
    minHeight: "80px"
  });
  return paymentSrc.map((val, idx) => {
    let hlight = "";
    if (selectedIdx === idx) {
      hlight += " border-primary border border-solid";
    } else if (selectedIdx !== -1) {
      hlight = " opacity-25";
    }

    return (
      <div
        className={
          "max-w-sm rounded overflow-hidden shadow-card cursor-pointer  my-12 mx-8 " +
          className +
          hlight
        }
        key={idx}
        onClick={() => onChange(idx)}
      >
        <StyledImg src={val} alt="logo" className="mx-8 my-4" />
      </div>
    );
  });
};

const StyledImg = styled.img`
  display: block;
  max-width: 90px;
  max-height: 50px;
  width: auto;
  height: auto;
  margin: auto;
`;
