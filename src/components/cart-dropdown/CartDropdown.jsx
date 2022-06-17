import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux/es/exports";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import { selectCartItems } from "../../store/cart/cartSelector";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropdownStyles";

export default function CartDropdown() {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
}
