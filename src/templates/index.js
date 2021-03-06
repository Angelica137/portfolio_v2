import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Post from "../components/post";
import Navigation from "../components/navigation";
import "../styles/layout.css";

const Index = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data;

  return (
    <>
      <SEO />
      <Layout>
        <div class="container">
          <div class="post-module--post--28Mq2">
            <h1>
              Hi, I am Angelica, a full-stack software engineer and experience
              designer based in London.
            </h1>
            <br />
            <br />
            <p>
              I love designing and building products that make a tangible
              positive contribution to their users. For the past six years, I
              have worked in a wide variety of problems creating simple
              solutions that help users achieve their goals.
            </p>
            <p>Technologies I am currently working with:</p>
            <ul>
              <li>Python, Pytest, Flask</li>
              <li>PostgreSQL</li>
              <li>Flutter</li>
              <li>Figma</li>
            </ul>
            <br />
            <p>Have a look around and get in touch! 👾</p>
            <p>
              You can find my{" "}
              <a href="https://www.angelicaberistain.com/">UX portfolio here</a>{" "}
              💫
            </p>
          </div>
        </div>
        {posts.map(({ node }) => {
          const {
            id,
            excerpt: autoExcerpt,
            frontmatter: {
              title,
              date,
              path,
              author,
              coverImage,
              standfirst,
              excerpt,
              tags,
              live,
              github,
            },
          } = node;

          return (
            <div>
              <Post
                key={id}
                title={title}
                date={date}
                path={path}
                author={author}
                coverImage={coverImage}
                tags={tags}
                standfirst={standfirst}
                excerpt={excerpt}
                live={live}
                github={github}
              />
            </div>
          );
        })}

        <Navigation
          previousPath={previousPagePath}
          previousLabel="Newer posts"
          nextPath={nextPagePath}
          nextLabel="Older posts"
        />
      </Layout>
    </>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
};

export const postsQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            path
            author
            standfirst
            excerpt
            tags
            live
            github
            coverImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Index;
