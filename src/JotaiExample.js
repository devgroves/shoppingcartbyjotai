import React from "react";
// import ReactDom from "react-dom";
import { atom, useAtom } from "jotai";
import Cart from "./cart.png";
// import "./jotai.css";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import productsJson from "./Products.json";
import ProductCard from "./ProductCard";

export const cartAtom = atom([]);

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
  const [cart, setCart] = useAtom(cartAtom);
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
                <>
                  <div>
                    <ul className="cart-items">
                      {cart.map((product) => {
                        console.log("product", product);
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
                              onClick={
                                () => console.log("first")
                                //handleRemove(product.id)
                              }
                            >
                              ×
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="action-block">
                      <button
                        type="button"
                        className={{ disabled: productsJson && productsJson.length === 0 }}
                        // onClick={handleProceedCheckout}
                      >
                        PROCEED TO CHECKOUT
                      </button>
                    </div>
                  </div>
                </>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <CounterButton />
      </>
    </div>
  );
}

export function CounterButton() {
  return (
    <div>
      <>
        <div className="">
          <div className="products">
            {productsJson.map((data) => {
              return <ProductCard key={data.id} data={data} />;
            })}
          </div>
        </div>
      </>
    </div>
  );
}
