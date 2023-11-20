import React, { useImperativeHandle, useState } from "react";
import LoadingPage, { ILoadingGlobal } from "./Loading";

export interface PropsShowLoading {
  hideScreen?: boolean;
}
export interface IGlobalLoadingPage {
  open: (hideScreen?: PropsShowLoading) => void;
  close: () => void;
}
const LoadingPageGlobal = React.forwardRef((_props, ref) => {
  const [popupData, setPopupData] = useState<ILoadingGlobal>({
    visible: false,
  });
  useImperativeHandle(ref, () => ({
    open: (hideScreen: PropsShowLoading) => {
      hideScreen ? setPopupData({ visible: true, ...hideScreen }) : setPopupData({ visible: true });
    },
    close: () => {
      setPopupData({ visible: false });
    },
  }));
  return <LoadingPage {...popupData} />;
});

export default LoadingPageGlobal;
