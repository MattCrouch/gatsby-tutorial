import React from "react";

import Container from "../components/Container/Container";
import Layout from "../templates/Layout/Layout";

const NotFoundPage = () => (
  <Layout>
    <Container>
      <p>
        This page doesn't exist{" "}
        <span role="img" aria-label="embarassed">
          🙈
        </span>
      </p>
    </Container>
  </Layout>
);

export default NotFoundPage;
