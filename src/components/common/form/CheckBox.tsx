import { Checkbox } from "@mui/material";
import { FastFieldProps, useFormikContext } from "formik";
import React from "react";

interface IProps extends FastFieldProps {
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
}

const CheckBox = (props: IProps) => {
  const { field, icon, checkedIcon } = props;
  const { name } = field;

  const { setFieldValue, values }: any = useFormikContext();
  return <Checkbox checked={values[name]} onChange={(e) => setFieldValue(name, e.target.checked)} icon={icon} checkedIcon={checkedIcon} />;
};

export default CheckBox;
