import { GlobalPopupConfirmRef } from "@/components/common/popup/GlobalPopup";
import React from "react";

class PopupService {
  static instance: React.MutableRefObject<GlobalPopupConfirmRef>;
}

export default PopupService;
