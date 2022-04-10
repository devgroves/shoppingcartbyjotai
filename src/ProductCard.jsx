import React, { useState } from "react";
import { useAtom } from "jotai";
import { cartAtom } from "./JotaiExample";
const ProductCard = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [value, setValue] = useState(1);
  const [cart, setCart] = useAtom(cartAtom);
  const { image, name, price, id, stock } = data;

  const handleAddToCart = () => {
    const product = { ...data, quantity: value };
    const d = [...cart, product];
    setCart(d);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3500);
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <h4 className="product-name">{name}</h4>
      <p className="product-price">{price}</p>
      <div className="stepper-input">
        <p
          className="decrement"
          onClick={() => {
            if (value > 1) {
              setValue(value - 1);
            }
          }}
        >
          –
        </p>
        <input
          type="number"
          className="quantity"
          name="quantity"
          min="1"
          defaultValue="1"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <p
          className="increment"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +
        </p>
      </div>
      <div className="product-action">
        <button className={!isAdded ? "" : "added"} type="button" onClick={handleAddToCart} disabled={isAdded}>
          {!isAdded ? "ADD TO CART" : "✔ ADDED"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
