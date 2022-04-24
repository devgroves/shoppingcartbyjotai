import { useAtom } from "jotai";
import { cartAtom } from "./Atoms";
import React from "react";

const CartDisplay = ({ data }) => {
    const [cart, setCart] = useAtom(cartAtom);
    const forceUpdate = React.useState()[1].bind(null, {});

    return ( <ul className="cart-items">
    {cart.map((product) => {
      // console.log("product", product);
      return (
        <li className="cart-item" key={product.name}>
          <img className="product-image" src={product.image} alt="" />
          <div className="product-info">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
          <div className="product-total">
            <p className="quantity">
              {`${product.quantity} ${product.quantity > 1 ? "Nos." : "No."}`}
            </p>
            <p className="amount">{product.quantity * product.price}</p>
          </div>
          <button
            className="product-remove"
            onClick={() => {
              const index = cart.findIndex((pro) => pro.id === product.id);
              cart.splice(index, 1);
              setCart(cart);
              forceUpdate();
            }}
          >
            ×
          </button>
        </li>
      );
    })}
  </ul>);
}

export default CartDisplay;