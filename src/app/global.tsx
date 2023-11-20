"use client";

import React from "react";

import LoadingPageGlobal, { IGlobalLoadingPage } from "@/components/common/loading-global";
import LoadingPageService from "@/helpers/LoadingPageService";
import PopupService from "@/helpers/PopupService";
import GlobalPopupConfirm, { GlobalPopupConfirmRef } from "@/components/common/popup/GlobalPopup";

const Global = () => {
  LoadingPageService.instance = React.useRef<IGlobalLoadingPage | any>(null);
  PopupService.instance = React.useRef<GlobalPopupConfirmRef | any>(null);

  return (
    <>
      <LoadingPageGlobal ref={LoadingPageService.instance} />
      <GlobalPopupConfirm ref={PopupService.instance} />
    </>
  );
};

export default Global;
