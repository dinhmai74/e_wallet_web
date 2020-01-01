import { Avatar, TextField as TextFieldDF } from "@material-ui/core";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import NumberFormat from "react-number-format";
import { AccountContactData } from "screens/Transfer/TransferGeneralScreen/TransferData";

interface Props {
  bag: any;
}

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
      format="#### ### ###"
    />
  );
}

export const TransferReceiverInfo: React.FC<Props> = props => {
  const { bag } = props;
  const size = "3.75rem";
  return (
    <div className="my-12 flex-col">
      <p className="text__h3 color__steel font-medium">
        Receiver account information:
      </p>

      <div className="flex flex-row mt-8 items-center">
        <Avatar
          alt={"name"}
          src={bag?.values?.src}
          style={{
            width: size,
            height: size
          }}
        />

        <TextFieldDF
          id="outlined-basic"
          label="Phone  "
          name="phone"
          type="phone"
          InputProps={{
            inputComponent: NumberFormatCustom as any,
            style: { fontSize: 14 }
          }}
          onChange={(e: any) => {
            const phone = e.target.value;
            bag.setFieldValue("phone", phone);
            let name = "";
            let src = "";
            const user = AccountContactData.find(v => v.phone === phone);
            if (user) {
              name = user?.name;
              src = user?.src;
            }
            bag.setFieldValue("name", name);
            bag.setFieldValue("src", src);
          }}
          value={bag?.values?.phone}
          variant="outlined"
          className="mx-4"
          size="small"
        />

        <Field
          id="outlined-basic"
          size="small"
          label="Name  "
          name="name"
          type="name"
          disabled={true}
          component={TextField}
          variant="outlined"
          className="mx-4 text__btn"
          InputProps={{
            style: { fontSize: 14 }
          }}
        />
      </div>
    </div>
  );
};
