/* /components/Layout.js */
import Image from 'next/image';
import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { 
  Container, 
  Nav, 
  NavItem, 
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  NavbarText
} from "reactstrap";
import AppContext from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/public/logo1.png'
import { render } from 'react-dom';


const Layout = (props) => {

  let isAuthenticated = true;
  const title = "Boz Deliveries";
  const {user, cart, total, setUser, addItem, removeItem} = useContext(AppContext);
  const numberOfItems = cart.items.map((item) => {
    return item.quantity;
  })

  console.log( 'layout rendered' );
  console.log( 'user', user );

  const renderitems = () => {
    let {items} = cart;
    if (items && items.length){
      var itemList = cart.items.map((item) => {
        if (item.quantity > 0) {
          return (
            <DropdownItem className="items-one"
            key={item.id}>
              <span style={{ marginLeft: 5 }} id="item-quantity">
                    {item.quantity}x
              </span>
              <span id="item-price">&nbsp; ${item.price}</span>
              <span id="item-name">&nbsp; {item.name}</span>

            </DropdownItem>
          )
        }
      })
      return itemList;
    }
  }
  return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <script src="https://js.stripe.com/v3" />
        </Head>
        <header>
          <style jsx>
            {`
              a {
                color: white;
              }
              h5 {
                color: white;
                padding-top: 11px;
              }
              a:hover {
                color: red;
              }
            `}
          </style>
          <Image 
        src="/header.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ filter: 'blur(5px)', zIndex: -5, paddingTop: "100px" } }
          />
          <Nav className="navbar navbar-dark bg-dark" style={{maxHeight: "60px"}}>
            <NavbarBrand>
              <Link href="/">
                <a className="navbar-brand">
                <Image src={logo}
                layout="fixed"
                height="40px"
                width="40px"
                
                />
                Boz Deliveries
                </a>
              </Link>
            </NavbarBrand>
            <NavItem className="ml-auto">
              {user ? (
                <NavbarText>User:{user}</NavbarText>
              ) : (
                <Link href="/register">
                  <a className="nav-link">Sign up</a>
                </Link>
              )}
            </NavItem>

            <UncontrolledDropdown nav inNavbar style={{marginRight: "40px"}}>
                <DropdownToggle nav caret>
                  Cart
                </DropdownToggle>
                <DropdownMenu right positionFixed={true}>
                  <DropdownItem>{numberOfItems.reduce((partialSum, a) => partialSum + a, 0)} item(s)</DropdownItem>
                  {renderitems()}
                  <DropdownItem>Total: ${cart.total}</DropdownItem>
                  <DropdownItem><Link href="/checkout">Go To Cart</Link></DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
              {user ? (
                <Link href="/">
                  <a
                    className="nav-link"
                    onClick={() => {
                      logout();
                      setUser = {};
                      user = false;
                    }}
                  >
                    Logout
                  </a>
                </Link>
              ) : (
                <Link href="/login">
                  <a className="nav-link">Login</a>
                </Link>
              )}
            </NavItem>
              <NavbarText>By Tina Collier</NavbarText>
          </Nav>

      </header>

      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;