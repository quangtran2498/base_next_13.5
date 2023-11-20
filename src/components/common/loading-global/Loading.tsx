import React, { useEffect } from "react";
import Loading from "../circular-process/Loading";
export interface ILoadingGlobal {
  visible?: boolean;
  hideScreen?: boolean;
}

const LoadingPage = (props: ILoadingGlobal) => {
  const { visible, hideScreen } = props;

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [visible]);

  if (!visible) return <div />;
  return (
    <>
      <div style={hideScreen ? { ...loadingStyle, ...loadingStyleHideScreen } : { ...loadingStyle, ...loadingStyleInScreen }}>
        <Loading />
      </div>
    </>
  );
};
export default LoadingPage;

const loadingStyle: React.CSSProperties = {
  position: "fixed",
  height: "100vh",
  width: "100vw",
  top: 0,
  right: 0,
  left: 0,
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const loadingStyleHideScreen: React.CSSProperties = {
  background: "#fff",
};

const loadingStyleInScreen: React.CSSProperties = {
  background: "rgba(0, 0, 0, 0.2)",
};
