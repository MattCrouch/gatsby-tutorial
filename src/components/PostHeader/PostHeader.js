import React from "react";

import Container from "../Container/Container";

import "./PostHeader.css";

const PostHeader = ({ title, date }) => (
  <div className="post-header">
    <Container>
      <h1 className="post-header__title">{title}</h1>
      <div className="post-header__date">{date}</div>
    </Container>
  </div>
);

export default PostHeader;
