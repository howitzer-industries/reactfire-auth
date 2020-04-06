import React from "react";
import { useAuth } from "reactfire";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { auth as firebaseAuth } from "firebase/app";

export const Login = () => {
  const signInUiConfig = {
    signInOptions: [firebaseAuth.PhoneAuthProvider.PROVIDER_ID],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };

  const auth = useAuth();

  return <StyledFirebaseAuth uiConfig={signInUiConfig} firebaseAuth={auth} />;
};

Login.displayName = "Login";
