import { Screen } from "components";
import { RowTextSpaceBetween } from "components/RowTextSpaceBetween";
import React from "react";
import { useHistory, useLocation } from "react-router";
import { Paths } from "router/PrimaryRouters";
import { TransferPaymentInfoCard } from "screens/Transfer/TransferPaymentScreen/components/TransferPaymentInfoCard";
import { images } from "theme";
import { animated } from "react-spring";
import { useScaleAndFadeIn, useFadeIn } from "utils/animations/useAnimations";

interface Props {}

export const TransferPaymentSuccessScreen: React.FC<Props> = () => {
  const { state } = useLocation();
  const history = useHistory();

  const fadeIn = useFadeIn();
  const scaleIn = useScaleAndFadeIn();

  return (
    <Screen className="flex flex-row">
      <animated.div
        className="flex flex-col mt-40 mx-12 lg:mx-32 md:mx-24 flex-1"
        style={scaleIn}
      >
        <p className="text__h2 color__steel mb-12 font-bold">
          Purchased ticket:
        </p>
        <TransferPaymentInfoCard
          paymentInfo={state}
          buttonTx="Transfer another transaction"
          isSelectedPayment={true}
          onSubmit={() => history.push(Paths.transfer)}
        />
      </animated.div>

      <animated.div
        className="w-1/2 bg__bg-5 min-h-screen hidden md:inline-block pt-32 justify-center items-center"
        style={fadeIn}
      >
        <img
          src={`${process.env.PUBLIC_URL}/${images.success}`}
          className="img__decorate mx-auto my-4"
          alt="illu"
        />
        <p className="text__d2 color__blue-grey text__center">
          Purchase successful
        </p>
        <RowTextSpaceBetween
          leftTx="Transaction id:"
          rightTx={"1329fasd98312"}
          leftClassName="text__h2 color__steel"
          rightClassName="text__h2 color__blue-grey"
          className="m-24"
        />
      </animated.div>
    </Screen>
  );
};
