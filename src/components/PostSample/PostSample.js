import React from "react";
import { Link } from "gatsby";

import Container from "../Container/Container";
import "./PostSample.css";

const PostSample = ({ date, excerpt, path, tags, summary, title }) => (
  <section className="post-sample">
    <Link
      aria-label={title}
      className={`post-sample__link ${tags && "post-sample__link--has-tags"}`}
      to={path}
    >
      <Container>
        <h1 className="post-sample__title">{title}</h1>
        <div className="post-sample__date">{date}</div>

        <div className="post-sample__summary">
          {summary ? summary : excerpt}
        </div>

        {tags && (
          <ul className="post-sample__tags">
            {tags.map(tag => (
              <li className="post-sample__tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Link>
  </section>
);

export default PostSample;
