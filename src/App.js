import React, { Suspense } from "react";

import { FirebaseAppProvider, AuthCheck } from "reactfire";
import { PreloadProvider } from "./PreloadProvider";
import { AuthenticatedRequestOnLoad } from "./AuthenticatedRequestOnLoad";
import { Login } from "./Login";

const firebaseConfig = {
  apiKey: "AIzaSyBvXq33jO7G_p7uYh3qjVCR18AxM-zp7As",
  authDomain: "reactfire-auth-31061.firebaseapp.com",
  databaseURL: "https://reactfire-auth-31061.firebaseio.com",
  projectId: "reactfire-auth-31061",
  storageBucket: "reactfire-auth-31061.appspot.com",
  messagingSenderId: "768657901723",
  appId: "1:768657901723:web:16d0c5cc54145c6c659e3e",
};

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <PreloadProvider>
        <h1>Working!</h1>
        <Suspense fallback={<span>loading...</span>}>
          <AuthCheck fallback={<Login></Login>}>
            <Suspense fallback={<span>loading...</span>}>
              <AuthenticatedRequestOnLoad></AuthenticatedRequestOnLoad>
            </Suspense>
          </AuthCheck>
        </Suspense>
      </PreloadProvider>
    </FirebaseAppProvider>
  );
}

export default App;
