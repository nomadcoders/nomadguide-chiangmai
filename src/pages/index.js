import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data: { allFile: { edges } } }) => (
  <div>
    <h1>Our Categories</h1>
    {edges.map((edge, index) => (
      <img
        key={index}
        src={edge.node.childMarkdownRemark.frontmatter.image.publicURL}
      />
    ))}
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export const pageQuery = graphql`
  query GetCategories {
    allFile(filter: { extension: { eq: "md" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              description
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
