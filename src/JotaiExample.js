import React from "react";
// import ReactDom from "react-dom";
import { atom, useAtom } from "jotai";
import Cart from "./cart.png";
import { Navbar, Container, Offcanvas } from "react-bootstrap";
import productsJson from "./Products.json";
import ProductCard from "./ProductCard";

export const cartAtom = atom([]);

//main Component
export default function JotaiExample() {
  const [cart, setCart] = useAtom(cartAtom);
  const forceUpdate = React.useState()[1].bind(null, {});
  return (
    <div>
      <>
        <Navbar bg="light" expand={false} fixed="top">
          <Container fluid>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Brand>Shopping Cart Example</Navbar.Brand>
            <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Your Cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <>
                  <div>
                    <ul className="cart-items">
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
                    </ul>
                    <div className="action-block">
                      <button
                        type="button"
                        className={{ disabled: cart && cart.length === 0 }}
                        onClick={() => {
                          setCart([]);
                          forceUpdate();
                        }}
                      >
                        PROCEED TO CHECKOUT
                      </button>
                    </div>
                  </div>
                </>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Toggle aria-controls="offcanvasNavbar">
              <img src={Cart} alt="" height={30} width={30} />
            </Navbar.Toggle>
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
