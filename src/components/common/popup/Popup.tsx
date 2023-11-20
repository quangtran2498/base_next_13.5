import { makeStyles } from "@mui/styles";
import React, { CSSProperties, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

export interface PopupConfirmProps {
  visible: boolean;
  title?: string | React.ReactNode;
  content?: React.ReactNode | string;
  onHidePopup?: () => void;
  onCancel?: () => void;
  icon?: string | React.ReactNode;
  footer?: React.ReactNode;
  path?: string;
  styleTitle?: CSSProperties;
  disableBtn?: boolean | string;
  btnClose?: React.ReactNode;
}
const useStyles = makeStyles((theme) => {
  return {
    rootPopup: {
      background: "rgba(0, 0, 0, 0.6)",
      position: "fixed",
      width: "100%",
      height: "100vh",
      zIndex: 99999999,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      background: "#fff",
      borderRadius: "16px",
      padding: "16px 16px",
      width: "100%",
      margin: "0 16px",
      maxWidth: "400px",
      height: "fit-content",
      position: "relative",
    },
    close: {
      position: "absolute",
      top: 16,
      right: 16,
      cursor: "pointer",
    },
  };
});

const PopupConfirm = (props: PopupConfirmProps) => {
  const { visible, onHidePopup, content, title, icon, styleTitle, btnClose } = props;

  const classes = useStyles();

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [visible]);

  if (!visible) return <div />;

  return (
    <div className={classes.rootPopup}>
      <div className={classes.content}>
        <div className={classes.close} onClick={onHidePopup}>
          <CloseIcon />
        </div>
        <div className="">{content}</div>
      </div>
    </div>
  );
};
export default PopupConfirm;
