import React from "react";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in/SignInForm";
import "./authentication.styles.scss";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export default function Authentication() {
  
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
