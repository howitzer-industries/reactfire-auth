import React from "react";

import {
  preloadAuth,
  preloadFirestore,
  preloadAnalytics,
  preloadFunctions,
} from "reactfire";

export const AuthenticatedRequestOnLoad = (props) => {
  return (
    <>
      <h1>Making an authenticated request</h1>
    </>
  );
};
AuthenticatedRequestOnLoad.displayName = "AuthenticatedRequestOnLoad";
