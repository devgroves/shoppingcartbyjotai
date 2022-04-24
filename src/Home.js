import React from "react";
// import ReactDom from "react-dom";
import { useAtom } from "jotai";
import Cart from "./cart.png";
import { Navbar, Container, Offcanvas } from "react-bootstrap";
import productsJson from "./Products.json";
import ProductCard from "./ProductCard";
import CartDisplay from "./CartDisplay";
import { cartAtom } from "./Atoms";



//main Component
export default function Home() {
  const [cart, setCart] = useAtom(cartAtom);
  const forceUpdate = React.useState()[1].bind(null, {});
  return (
    <div>
      <>
        <Navbar bg="light" expand={false} fixed="top">
          <Container fluid>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Brand className="headerText">Shopping Cart Example</Navbar.Brand>
            <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Your Cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <>
                  <div>
                  <CartDisplay/>
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

        <Products />
      </>
    </div>
  );
}

export function Products() {
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
