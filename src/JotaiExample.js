import React from "react";
// import ReactDom from "react-dom";
import { atom, useAtom } from "jotai";
import Cart from "./cart.png";
import "./jotai.css";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

//Counter means Number of Product
export const counterAtom = atom(0);

//this is the total price item
export const priceAtom = atom(0);

//price of the product
export const redAtom = atom(5);
export const cornAtom = atom(7);
export const pineAtom = atom(10);
export const bitterAtom = atom(20);

//number of products in Store
export const totalRed = atom(5);
export const totalCorn = atom(3);
export const totalPine = atom(8);
export const totalBitter = atom(4);

//modal
export const modalShown = atom(false);
//main Component
export default function JotaiExample() {
  const [showModal] = useAtom(modalShown);
  return (
    <div>
      <>
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">Shopping Cart Example</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar">
              <img src={Cart} alt="" height={30} width={30} />
            </Navbar.Toggle>
            <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Your Cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <CurrentCount />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        {showModal ? <CurrentCount /> : ""}
        <CounterButton />
      </>
    </div>
  );
}

export function CounterButton() {
  const [showModal, setShowModal] = useAtom(modalShown);
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
  //hanClick
  const handleClick = (val, id, func, total) => {
    const d = document.getElementById(id).value;
    const d1 = parseInt(d);
    console.log("d1", d1);
    const prodPrice = d1 * val;
    func(total - d1);
    setCount((number) => number + d1); // Increment number
    setPrice((number) => number + prodPrice);
  };
  //Price Component
  const PriceComponent = (v, count) => {
    return <>{v === 0 ? <p style={{ color: "red" }}>Out of Stock</p> : `${count}.00 X ${v}`}</>;
  };
  //Button Component
  const ButtonComponent = (value, total, func, id) => {
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
              handleClick(value, id, func, total);
              // func(total - 1);
            }}
          >
            <span className="dot">1</span>Add to cart
          </button>
        )}
      </>
    );
  };
  // const openModal = () => {
  //   setShowModal(true);
  // };
  return (
    <div>
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
                    <div className="buttons d-flex flex-row justify-content-center">
                      <div className="cart">
                        {" "}
                        <input type="number" id="first" style={{ width: 40 }} min="1" defaultValue={1} max={tRed} />
                      </div>{" "}
                      {ButtonComponent(red, tRed, settRed, "first")}
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
                    <div className="buttons d-flex flex-row justify-content-center">
                      <div className="cart">
                        {" "}
                        <input type="number" id="second" style={{ width: 40 }} min="1" defaultValue={1} max={tCorn} />
                      </div>{" "}
                      {ButtonComponent(corn, tCorn, settCorn, "second")}
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
                    <div className="buttons d-flex flex-row justify-content-center">
                      <div className="cart">
                        {" "}
                        <input type="number" id="pine" style={{ width: 40 }} min="1" defaultValue={1} max={tPine} />
                      </div>{" "}
                      {ButtonComponent(pine, tPine, settPine, "pine")}
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
                    <div className="buttons d-flex flex-row justify-content-center">
                      <div className="cart">
                        {" "}
                        <input type="number" id="bitter" style={{ width: 40 }} min="1" defaultValue={1} max={tBitter} />
                      </div>{" "}
                      {ButtonComponent(bitter, tBitter, settBitter, "bitter")}
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
  // const [showModal, setShowModal] = useAtom(modalShown);
  const [count, setCount] = useAtom(counterAtom);
  const [price, setPrice] = useAtom(priceAtom);
  // const modalRef = useRef();
  // const closeModal = (e) => {
  //   if (e.target === modalRef.current) {
  //     setShowModal(false);
  //   }
  // };

  return (
    <>
      <div>
        {count === 0 && <h6>Please add some products to cart.</h6>}
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
    </>
  );
}
