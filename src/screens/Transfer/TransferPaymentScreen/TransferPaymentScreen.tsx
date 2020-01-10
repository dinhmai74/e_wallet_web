import { Screen } from "components";
import { PaymentMethods } from "components/PaymentMethods";
import React from "react";
import { useHistory, useLocation } from "react-router";
import { useBoolean } from "react-use";
import { Paths } from "router/PrimaryRouters";
import { TransferPaymentInfoCard } from "screens/Transfer/TransferPaymentScreen/components/TransferPaymentInfoCard";
import { ImgPayment } from "theme";
import {  useScaleAndFadeIn } from "utils/animations/useAnimations";
import { animated, useSpring } from "react-spring";

interface Props {}

export const TransferPaymentScreen: React.FC<Props> = props => {
  const location = useLocation();
  const { state } = location;
  const [isSelectedPayment, setSelectedPayment] = useBoolean(false);
  const history = useHistory();

  const onChangeMethods = () => {
    setSelectedPayment(true);
  };

  const animIn = useScaleAndFadeIn();

  const [animCardOut, setAnimCardOut] = useSpring(() => ({
    x: 0,
    opacity: 1
  }));

  console.log(animCardOut);

  return (
    <Screen style={animIn}>
      <p className="text__h1 my-4 mb-12 color__grey mt-12">Simple payment</p>

      <PaymentMethods onChange={onChangeMethods} />

      <div className="flex flex-row my-8 justify-center px-16 xl:px-0">
        <animated.div style={{ opacity: animCardOut.opacity }}>
          <ImgPayment
            width={500}
            className="hidden lg:block mr-40"
            style={{ minWidth: 500 }}
          />
        </animated.div>
        <animated.div
          style={{
            opacity: animCardOut.opacity
          }}
          onAnimationEnd={() =>
            history.push(Paths.transferPaymentSuccess, state)
          }
        >
          <p className="text__h3 color__steel mb-8">Information</p>
          <TransferPaymentInfoCard
            buttonTx="Confirm"
            paymentInfo={{ ...state }}
            isSelectedPayment={isSelectedPayment}
            // onSubmit={() => history.push(Paths.transferPaymentSuccess, state)}
            onSubmit={() => {
              console.log("hello");
              setAnimCardOut({
                opacity: 0
              });
            }}
          />
        </animated.div>
      </div>
    </Screen>
  );
};
