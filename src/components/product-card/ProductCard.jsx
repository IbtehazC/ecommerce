import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";

import { addItemToCart } from "../../store/cart/cartAction";
import { selectCartItems } from "../../store/cart/cartSelector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import "./productCard.scss";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
}
