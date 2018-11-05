import React from "react";
import { Link } from "gatsby";

import Container from "../Container/Container";

import "./Header.css";

const Header = ({ siteTitle }) => (
  <header className="header">
    <Container>
      <h1 className="header__title">
        <Link className="header__link" to="/">
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </header>
);

export default Header;
