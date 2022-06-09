import styledComponents from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/ButtonStyles";

export const CartDropdownContainer = styledComponents.div`
  position: absolute;
  width: 320px;
  height: 420px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} 
  {
    margin-top: auto;
  }
`;

export const EmptyMessage = styledComponents.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styledComponents.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
