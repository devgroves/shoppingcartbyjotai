import React from "react";
import { atom, useAtom } from "jotai";
import "./jotai.css";
export const counterAtom = atom(0);
export const priceAtom = atom(0);
export const redAtom = atom(5);
export const cornAtom = atom(7);
export const pineAtom = atom(10);
export const bitterAtom = atom(20);
export default function JotaiExample() {
  return (
    <div>
      <>
        <CurrentCount />
        <CounterButton />
      </>
    </div>
  );
}

export function CounterButton() {
  const [count, setCount] = useAtom(counterAtom);
  const [price, setPrice] = useAtom(priceAtom);
  const [red] = useAtom(redAtom);
  const [corn] = useAtom(cornAtom);
  const [pine] = useAtom(pineAtom);
  const [bitter] = useAtom(bitterAtom);
  const handleClick = (val) => {
    setCount((number) => number + 1); // Increment number
    setPrice((number) => number + val);
  };

  return (
    <div>
      <h1>Shopping Cart Example</h1>
      <hr />
      <>
        <div className="wrapper">
          <div className="container">
            <div className="row g-1">
              <div className="col-md-3">
                <div className="card p-3">
                  <div className="text-center">
                    {" "}
                    <img src="https://i.imgur.com/w2rCsEw.jpg" width="200" />{" "}
                  </div>
                  <div className="product-details">
                    {" "}
                    <span className="font-weight-bold d-block">$ 5.00</span> <span>Red Redish</span>
                    <div className="buttons d-flex flex-row">
                      <div className="cart">
                        <i className="fa fa-shopping-cart"></i>
                      </div>{" "}
                      <button className="btn btn-success cart-button btn-block" onClick={() => handleClick(red)}>
                        <span className="dot">1</span>Add to cart
                      </button>
                    </div>
                    <div className="weight">
                      {" "}
                      <small>1 piece 2.5kg</small>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card p-3">
                  <div className="text-center">
                    {" "}
                    <img src="https://i.imgur.com/ZRUetRF.jpg" width="200" />{" "}
                  </div>
                  <div className="product-details">
                    {" "}
                    <span className="font-weight-bold d-block">$ 7.00</span> <span>Corn</span>
                    <div className="buttons d-flex flex-row">
                      <div className="cart">
                        <i className="fa fa-shopping-cart"></i>
                      </div>{" "}
                      <button className="btn btn-success cart-button btn-block" onClick={() => handleClick(corn)}>
                        <span className="dot">1</span>Add to cart{" "}
                      </button>
                    </div>
                    <div className="weight">
                      {" "}
                      <small>1 piece 2.5kg</small>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card p-3">
                  <div className="text-center">
                    {" "}
                    <img src="https://i.imgur.com/0M7pldG.jpg" width="200" />{" "}
                  </div>
                  <div className="product-details">
                    {" "}
                    <span className="font-weight-bold d-block">$10.00</span> <span>Pine Apple</span>
                    <div className="buttons d-flex flex-row">
                      <div className="cart">
                        <i className="fa fa-shopping-cart"></i>
                      </div>{" "}
                      <button className="btn btn-success cart-button btn-block" onClick={() => handleClick(pine)}>
                        <span className="dot">1</span>
                        Add to cart{" "}
                      </button>
                    </div>
                    <div className="weight">
                      {" "}
                      <small>1 piece 2.5kg</small>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card p-3">
                  <div className="text-center">
                    {" "}
                    <img src="https://i.imgur.com/emb60L5.jpg" width="200" />{" "}
                  </div>
                  <div className="product-details">
                    {" "}
                    <span className="font-weight-bold d-block">$ 20.00</span> <span>Bitter Gourd</span>
                    <div className="buttons d-flex flex-row">
                      <div className="cart">
                        <i className="fa fa-shopping-cart"></i>
                      </div>{" "}
                      <button className="btn btn-success cart-button btn-block" onClick={() => handleClick(bitter)}>
                        <span className="dot">1</span>Add to cart{" "}
                      </button>
                    </div>
                    <div className="weight">
                      {" "}
                      <small>20 piece 2.5kg</small>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

function CurrentCount() {
  const [count] = useAtom(counterAtom);
  const [price] = useAtom(priceAtom);
  return (
    <div>
      <h3>Your Cart</h3>
      <h6>Please add some products to cart.</h6>
      <p>Total Product: {count}</p>
      <p>Total Price: $ {price}</p>
    </div>
  );
}
