import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Navigation from "./navigation";
import { toKebabCase } from "../helpers";

import style from "../styles/post.module.css";

const Post = ({
  title,
  date,
  path,
  coverImage,
  author,
  excerpt,
  tags,
  standfirst,
  live,
  github,
  html,
  previousPost,
  nextPost,
}) => {
  const previousPath = previousPost && previousPost.frontmatter.path;
  const previousLabel = previousPost && previousPost.frontmatter.title;
  const nextPath = nextPost && nextPost.frontmatter.path;
  const nextLabel = nextPost && nextPost.frontmatter.title;

  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>
          {excerpt ? <Link to={path}>{title}</Link> : title}
        </h1>
        <div className={style.meta}>
          {date} {author && <>— Written by {author}</>}
          {tags ? (
            <div className={style.tags}>
              {tags.map(tag => (
                <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                  <span className={style.tag}>#{tag}</span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        {coverImage && (
          <Img
            fluid={coverImage.childImageSharp.fluid}
            className={style.coverImage}
          />
        )}

        {standfirst ? (
          <>
            <p>{standfirst}</p>
          </>
        ) : (
          <></>
        )}

        {excerpt ? (
          <>
            <p>{excerpt}</p>
            <Link to={path} className={style.readMore}>
              Read more →
            </Link>
          </>
        ) : (
          <>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Navigation
              previousPath={previousPath}
              previousLabel={previousLabel}
              nextPath={nextPath}
              nextLabel={nextLabel}
            />
          </>
        )}
        <div className={style.projectLinks}>
          {live ? (
            <>
              <Link to={live} className={style.button}>
                See live
              </Link>
            </>
          ) : (
            <></>
          )}

          {github ? (
            <>
              <Link to={github} className={style.buttonIcon}>
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 44 44"
                  ari-label="github"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="title">See on GitHub</title>
                  <g
                    fill-rule="evenodd"
                    fill="none"
                    stroke-width="1"
                    stroke="none"
                    id="Page-1"
                  >
                    <rect
                      height="44"
                      width="44"
                      fill="none"
                      y="0"
                      x="0"
                      id="Rectangle"
                    />
                    <circle
                      r="21"
                      cy="22"
                      cx="22"
                      stroke-width="2"
                      stroke="#000000"
                      fill="none"
                      id="Circle"
                    />
                    <path
                      fill="#000000"
                      id="Shape"
                      d="M10,22.3044338 C10,27.7398363 13.4380429,32.3519218 18.2065134,33.9789169 C18.8069002,34.0922174 19.0256914,33.7122831 19.0256914,33.3859777 C19.0256914,33.0936624 19.015378,32.3201977 19.0094846,31.2936952 C15.671629,32.0369464 14.9673716,29.6440399 14.9673716,29.6440399 C14.4214985,28.2224964 13.634734,27.8440727 13.634734,27.8440727 C12.5451978,27.0804274 13.7172412,27.0962895 13.7172412,27.0962895 C14.921698,27.1831532 15.555235,28.3644997 15.555235,28.3644997 C16.6263544,30.2445326 18.364161,29.7014455 19.0477915,29.3864702 C19.1568188,28.5911007 19.4669572,28.0495243 19.8095092,27.741347 C17.1449707,27.4309036 14.3434114,26.3756983 14.3434114,21.660887 C14.3434114,20.3171431 14.8111974,19.2188837 15.5788084,18.3585552 C15.4557844,18.0473565 15.0439854,16.7965191 15.6966758,15.1030543 C15.6966758,15.1030543 16.7044415,14.7714615 18.9962246,16.3637112 C19.9538967,16.0910346 20.9800792,15.9543187 22.0003683,15.9497867 C23.0199208,15.9543187 24.0461033,16.0910346 25.0052488,16.3637112 C27.2955585,14.7714615 28.3018509,15.1030543 28.3018509,15.1030543 C28.9560146,16.7965191 28.5442156,18.0473565 28.4211916,18.3585552 C29.1902759,19.2188837 29.6543786,20.3171431 29.6543786,21.660887 C29.6543786,26.3870284 26.8491359,27.4271269 24.1757574,27.7322829 C24.6067098,28.1122172 24.9897787,28.8630219 24.9897787,30.0103782 C24.9897787,31.6555014 24.9757819,32.9826279 24.9757819,33.3859777 C24.9757819,33.7153044 25.1916265,34.0975048 25.8008533,33.9774062 C30.5649038,32.3473898 34,27.7390809 34,22.3044338 C34,15.5086701 28.6267227,10 21.998895,10 C15.3732773,10 10,15.5086701 10,22.3044338 Z"
                    />
                    <title id="title">See on GitHub</title>
                  </g>
                </svg>
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  author: PropTypes.string,
  excerpt: PropTypes.string,
  html: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  standfirst: PropTypes.string,
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
};

export default Post;
