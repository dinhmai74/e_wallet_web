import { TextField as TextFieldDF } from "@material-ui/core";
import { AppButton, Screen } from "components";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import _ from "lodash";
import { observer } from "mobx-react";
import React, { useRef } from "react";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router";
import { animated, useChain, useSpring, useTransition } from "react-spring";
import { Paths } from "router/PrimaryRouters";
import { recentContacts } from "screens/Transfer/TransferGeneralScreen/TransferData";
import { TransferGeneralListSuggest } from "screens/Transfer/TransferGeneralScreen/TransferGeneralListSuggest";
import { TransferReceiverInfo } from "screens/Transfer/TransferGeneralScreen/TransferReceiverInfo";
import { useScaleAndFadeOut } from "utils/animations/useAnimations";
import * as Yup from "yup";
import { TransferGeneralScreenSideInfo } from "./component/TransferGeneralScreenSideInfo";

interface Props {}

export interface TransferFormValue {
  id: string;
  amount: string | number;
  name: string;
  message: string;
  phone: string;
  src: string;
}

const initialValues: TransferFormValue = {
  id: "",
  amount: "",
  message: "",
  phone: "",
  name: "",
  src: ""
};

const TransferSchema = Yup.object().shape({
  phone: Yup.string().required(),
  amount: Yup.number()
    .min(10000, "The smallest amount is 10,000d")
    .required()
});

const content = [
  ({ style, values, bag }) => (
    <animated.div style={style}>
      <TransferGeneralListSuggest
        selectedId={values.id}
        onChange={id => {
          bag.setFieldValue("id", id);
          const user = recentContacts.find(v => v.id === id);
          bag.setFieldValue("name", user?.name);
          bag.setFieldValue("phone", user?.phone);
          bag.setFieldValue("src", user?.src);
        }}
      />
    </animated.div>
  ),
  ({ style, values, bag }) => (
    <animated.div style={style}>
      <TransferReceiverInfo bag={bag} />
    </animated.div>
  ),
  ({ style, values, bag }) => {
    const { errors, touched } = bag;
    return (
      <animated.div style={style}>
        <div className="flex flex-col">
          <p className="text__h3 color__steel font-medium">Amount:</p>
          <TextFieldDF
            id="outlined-basic"
            size="small"
            name="amount"
            onChange={(e: any) => {
              const amount = e.target.value;
              bag.setFieldValue("amount", Number(amount));
            }}
            onBlur={bag.handleBlur}
            value={values.amount}
            helperText={touched.amount && errors.amount ? errors.amount : ""}
            error={!!errors.amount && touched.amount}
            placeholder="0 d"
            variant="outlined"
            className="text__btn max-w-xss mt-4 text-right"
            InputProps={{
              inputComponent: NumberFormatCustom as any,
              style: { fontSize: 14 } as any
            }}
          />
        </div>
      </animated.div>
    );
  },
  ({ style, bag }) => {
    const { errors, touched } = bag;
    const isValid = _.isEmpty(errors);
    const notTouched = _.isEmpty(touched);

    return (
      <animated.div style={style}>
        {/* message transfer */}
        <div className="flex flex-col my-12 max-w-xs md:max-w-xl">
          <p className="text__h3 color__steel font-medium">Message:</p>
          <Field
            id="outlined-basic"
            size="small"
            name="message"
            placeholder="Input message here..."
            multiline
            rows="6"
            component={TextField}
            variant="outlined"
            className="text__btn w-full mt-4 text-right"
            InputProps={{
              style: { fontSize: 14 } as any
            }}
          />

          <div className="justify-center flex mt-12">
            <AppButton
              type="submit"
              className="mx-auto mb-24 min-w-72 self-center"
              tx="Confirm"
              loading={bag.isSubmitting}
              disabled={!isValid || notTouched || bag.isSubmitting}
            />
          </div>
        </div>
      </animated.div>
    );
  }
];

export const TransferGeneralScreen: React.FC<Props> = observer(() => {
  const history = useHistory();

  const infoRef = useRef(null);

  const animSideInfo = useSpring({
    to: { translateX: "0%" },
    from: { translateX: "100%" },
    ref: infoRef
  });

  const transRef = useRef(null);
  const transitions = useTransition(content, item => content.indexOf(item), {
    ref: transRef,
    unique: true,
    trail: 400 / content.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });

  useChain([infoRef, transRef], [0, 0.25]);

  const [fade, setFade] = useScaleAndFadeOut();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TransferSchema}
      onSubmit={(values, action) => {
        action.setSubmitting(true);

        setTimeout(() => {
          action.setSubmitting(false);
          // @ts-ignore
          setFade();

          setTimeout(() => {
            history.push(Paths.transferPayment, {
              ...values
            });
          }, 500);
        }, 1000);
      }}
    >
      {bag => {
        return (
          <Screen className="flex-row flex " style={fade}>
            <animated.div
              style={animSideInfo}
              className="w-2/6 bg__bg-5 min-h-screen hidden lg:block pt-64 flex-col"
            >
              <TransferGeneralScreenSideInfo />
            </animated.div>

            <animated.div className="flex flex-col flex-1 pt-48 md:pt-32 px-12 md:pl-32">
              <Form>
                {transitions.map(({ item, key, props }) => {
                  const Content = content[key];
                  return (
                    <Content
                      key={key}
                      style={{ ...props }}
                      values={bag.values}
                      bag={bag}
                    />
                  );
                })}
              </Form>
            </animated.div>
          </Screen>
        );
      }}
    </Formik>
  );
});

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { value: string } }) => void;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      allowNegative={false}
      thousandSeparator
      suffix=" d"
    />
  );
}
