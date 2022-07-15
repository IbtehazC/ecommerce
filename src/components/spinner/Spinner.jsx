import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./SpinnerStyles";

export default function Spinner() {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
}
