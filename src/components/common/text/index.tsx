import { Typography } from "@mui/material";
import React, { CSSProperties } from "react";

interface IProps {
  children: string;
  styleProps?: CSSProperties;
}
interface ITextSpan {
  children: string | React.ReactNode;
  styleProps?: CSSProperties;
}

const TextTitle = (props: IProps) => {
  const { children, styleProps } = props;
  return (
    <Typography component={"p"} style={{ fontWeight: 700, ...styleProps }}>
      {children}
    </Typography>
  );
};

const TextDesc = (props: IProps) => {
  const { children, styleProps } = props;
  return (
    <Typography component={"p"} style={{ fontWeight: 400, ...styleProps }}>
      {children}
    </Typography>
  );
};

const TextSpan = (props: ITextSpan) => {
  const { children, styleProps } = props;
  return (
    <Typography component={"span"} style={{ fontWeight: 400, ...styleProps }}>
      {children}
    </Typography>
  );
};

const Text = {
  TextTitle,
  TextDesc,
  TextSpan,
};
export default Text;
