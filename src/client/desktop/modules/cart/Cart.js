import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../cartContext/CartContext";
import ProductList from "../products/components/ProductList";

const Cart = props => {
  const { cart, setCart } = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      {cart.length === 0 ? (
        <div>Няма продукти във вашата количка</div>
      ) : (
        <div>
          {cart.map(product => (
            <ProductList product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
