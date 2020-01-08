import { TextField as TextFieldDF } from "@material-ui/core";
import { AppButton, Screen } from "components";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import _ from "lodash";
import { observer } from "mobx-react";
import React from "react";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router";
import { Paths } from "router/PrimaryRouters";
import { recentContacts } from "screens/Transfer/TransferGeneralScreen/TransferData";
import { TransferGeneralListSuggest } from "screens/Transfer/TransferGeneralScreen/TransferGeneralListSuggest";
import { TransferReceiverInfo } from "screens/Transfer/TransferGeneralScreen/TransferReceiverInfo";
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
  id: Yup.string().required(),
  phone: Yup.string().required(),
  amount: Yup.number()
    .min(10000, "The min amount is 10,000d")
    .required()
});

export const TransferGeneralScreen: React.FC<Props> = observer(() => {
  const history = useHistory();

  return (
    <Screen className="flex-row flex ">
      <TransferGeneralScreenSideInfo />

      <div className="flex flex-col flex-1 pt-48 md:pt-32 px-12 md:pl-32">
        <Formik
          initialValues={initialValues}
          validationSchema={TransferSchema}
          onSubmit={(values, action) => {
            action.setSubmitting(true);

            setTimeout(() => {
              action.setSubmitting(false);
              history.push(Paths.transferPayment, {
                ...values
              });
            }, 1500);
          }}
        >
          {bag => {
            const { errors, values, touched } = bag;
            const isValid = _.isEmpty(errors);
            const notTouched = _.isEmpty(touched);
            return (
              <Form>
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

                <TransferReceiverInfo bag={bag} />

                {/* money transfer */}
                <div className="flex flex-col">
                  <p className="text__h3 color__steel font-medium">Amount:</p>
                  <TextFieldDF
                    id="outlined-basic"
                    size="small"
                    name="amount"
                    onChange={(e: any) => {
                      const amount = e.target.value;
                      bag.setFieldValue("amount", Number(amount));
                      bag.setFieldTouched("amount", true);
                    }}
                    value={values.amount}
                    helperText={touched.amount ? errors.amount : ""}
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
              </Form>
            );
          }}
        </Formik>
      </div>
    </Screen>
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
