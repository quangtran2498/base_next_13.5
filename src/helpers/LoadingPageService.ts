import React from "react";
import { IGlobalLoadingPage } from "../components/common/loading-global";
class LoadingPageService {
  static instance: React.MutableRefObject<IGlobalLoadingPage>;
}

export default LoadingPageService;
