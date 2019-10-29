import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import StackGrid from "react-stack-grid"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const shoots = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <StackGrid monitorImagesLoaded={true} columnWidth={150}>
          {shoots.map(({ node }) => (
            <Link to={node.fields.slug}>
              <img
                alt={node.frontmatter.title}
                key={node.fields.slug + "0"}
                src={node.frontmatter.featured_image.src}
              />
            </Link>
          ))}
          {shoots.reverse().map(({ node }) => (
            <Link to={node.fields.slug}>
              <img
                alt={node.frontmatter.title}
                key={node.fields.slug + "1"}
                src={node.frontmatter.featured_image.src}
              />
            </Link>
          ))}
          {shoots.map(({ node }) => (
            <Link to={node.fields.slug}>
              <img
                alt={node.frontmatter.title}
                key={node.fields.slug + "2"}
                src={node.frontmatter.featured_image.src}
              />
            </Link>
          ))}
        </StackGrid>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            featured_image {
              alt
              src
            }
            title
          }
        }
      }
    }
  }
`
