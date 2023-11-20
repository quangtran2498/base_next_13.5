import { Box } from "@mui/material";
import React from "react";

interface IOpenCamera {
  title: string;
  name: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  styleProps?: React.CSSProperties;
  disabled?: boolean;
  onTakingFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ButtonUpload = (props: IOpenCamera) => {
  const { title, iconLeft, iconRight, name, styleProps, disabled, onTakingFile } = props;

  const rndInt = Math.floor(Math.random() * 1000) + 1;
  const nameUpload = `${name}-${rndInt}`;

  const onUpload = () => {
    const inputElement: any = document.getElementById(nameUpload);
    setTimeout(() => {
      inputElement?.click();
    }, 50);
  };

  return (
    <>
      <label style={{ ...defaultStyle, ...styleProps }} onClick={onUpload}>
        {iconLeft && (
          <Box pr={1} style={{ display: "flex", alignItems: "center" }}>
            {iconLeft}
          </Box>
        )}
        <>{title}</>
        {iconRight && (
          <Box pl={1} style={{ display: "flex", alignItems: "center" }}>
            {iconRight}
          </Box>
        )}
      </label>
      <input
        id={nameUpload}
        type="file"
        // accept={tyleFile}
        hidden
        style={{ display: "hidden" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTakingFile(e)}
        disabled={disabled}
        data-role="none"
      />
    </>
  );
};
export default ButtonUpload;

const defaultStyle: React.CSSProperties = {
  display: "flex",
  fontSize: "16px",
  justifyContent: "center",
  color: "white",
  fontWeight: 600,
  borderRadius: "45px",
  padding: "8px 4px",
  background: "red",
  lineHeight: "24px",
  maxWidth: "200px",
  cursor: "pointer",
};
