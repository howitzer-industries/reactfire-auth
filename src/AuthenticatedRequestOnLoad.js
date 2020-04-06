import React from "react";

import {
  useFirestore,
  useUser,
  useFirestoreCollection,
  useAuth,
} from "reactfire";

export const AuthenticatedRequestOnLoad = (props) => {
  const auth = useAuth();
  const user = useUser();
  const db = useFirestore();

  const collectionRef = db
    .collectionGroup("invitations")
    .where("phoneNumber", "==", user.phoneNumber);

  const invitationsCollection = useFirestoreCollection(collectionRef);
  console.log(invitationsCollection.docs);
  return (
    <>
      <h1>Making an authenticated request</h1>
      <h2>Returned {invitationsCollection.docs.length} invitations</h2>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </>
  );
};
AuthenticatedRequestOnLoad.displayName = "AuthenticatedRequestOnLoad";
