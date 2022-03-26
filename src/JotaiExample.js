import React from "react";
import { atom, useAtom } from "jotai";
import "./jotai.css";
export const counterAtom = atom(0);
export const priceAtom = atom(0);
export const redAtom = atom(5);
export const cornAtom = atom(7);
export const pineAtom = atom(10);
export const bitterAtom = atom(20);
//items in the Store
export const totalRed = atom(5);
export const totalCorn = atom(3);
export const totalPine = atom(8);
export const totalBitter = atom(4);
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
  //Store
  const [tRed, settRed] = useAtom(totalRed);
  const [tCorn, settCorn] = useAtom(totalCorn);
  const [tPine, settPine] = useAtom(totalPine);
  const [tBitter, settBitter] = useAtom(totalBitter);
  const handleClick = (val) => {
    setCount((number) => number + 1); // Increment number
    setPrice((number) => number + val);
  };
  //Price Component
  const PriceComponent = (v, count) => {
    return <>{v === 0 ? "Out of Stock" : `${count}.00 X ${v}`}</>;
  };
  //Button Component
  const ButtonComponent = (value, total, func) => {
    return (
      <>
        {total === 0 ? (
          <button className="btn btn-success cart-button btn-block" onClick={() => handleClick(value)} disabled>
            <span className="dot">1</span>Add to cart
          </button>
        ) : (
          <button
            className="btn btn-success cart-button btn-block"
            onClick={() => {
              handleClick(value);
              func(total - 1);
            }}
          >
            <span className="dot">1</span>Add to cart
          </button>
        )}
      </>
    );
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
                    <img src="https://i.imgur.com/w2rCsEw.jpg" width="200" alt="" />{" "}
                  </div>
                  <div className="product-details">
                    {" "}
                    <span className="font-weight-bold d-block">{PriceComponent(tRed, 5)}</span> <span>Red Redish</span>
                    <div className="buttons d-flex flex-row">
                      <div className="cart">
                        <i className="fa fa-shopping-cart"></i>
                      </div>{" "}
                      {ButtonComponent(red, tRed, settRed)}
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
                    <img src="https://i.imgur.com/ZRUetRF.jpg" width="200" alt="" />{" "}
                  </div>
                  <div className="product-details">
                    {" "}
                    <span className="font-weight-bold d-block">{PriceComponent(tCorn, 7)}</span> <span>Corn</span>
                    <div className="buttons d-flex flex-row">
                      <div className="cart">
                        <i className="fa fa-shopping-cart"></i>
                      </div>{" "}
                      {ButtonComponent(corn, tCorn, settCorn)}
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
                    <img src="https://i.imgur.com/0M7pldG.jpg" width="200" alt="" />{" "}
                  </div>
                  <div className="product-details">
                    {" "}
                    <span className="font-weight-bold d-block">{PriceComponent(tPine, 10)}</span>{" "}
                    <span>Pine Apple</span>
                    <div className="buttons d-flex flex-row">
                      <div className="cart">
                        <i className="fa fa-shopping-cart"></i>
                      </div>{" "}
                      {ButtonComponent(pine, tPine, settPine)}
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
                    <img src="https://i.imgur.com/emb60L5.jpg" width="200" alt="" />{" "}
                  </div>
                  <div className="product-details">
                    {" "}
                    <span className="font-weight-bold d-block">{PriceComponent(tBitter, 20)}</span>{" "}
                    <span>Bitter Gourd</span>
                    <div className="buttons d-flex flex-row">
                      <div className="cart">
                        <i className="fa fa-shopping-cart"></i>
                      </div>{" "}
                      {ButtonComponent(bitter, tBitter, settBitter)}
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
  const [count, setCount] = useAtom(counterAtom);
  const [price, setPrice] = useAtom(priceAtom);
  return (
    <div>
      <h3>Your Cart</h3>
      <h6>Please add some products to cart.</h6>
      <p>Total Product: {count}</p>
      <p>Total Price: $ {price}</p>
      {count === 0 ? (
        <button className="btn btn-success cart-button btn-block" disabled>
          Checkout
        </button>
      ) : (
        <button
          className="btn btn-success cart-button btn-block"
          onClick={() => {
            setCount(0);
            setPrice(0);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}
