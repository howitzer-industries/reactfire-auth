import React from "react";

import {
  preloadAuth,
  preloadFirestore,
  preloadAnalytics,
  preloadFunctions,
} from "reactfire";

export const PreloadProvider = (props) => {
  preloadAuth();
  preloadAnalytics();
  preloadFirestore();

  preloadFunctions();
  return <>{props.children}</>;
};
PreloadProvider.displayName = "PreloadProvider";
