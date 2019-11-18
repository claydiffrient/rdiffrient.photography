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

    const WIDTH = 150

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <StackGrid monitorImagesLoaded={true} columnWidth={WIDTH}>
          {shoots.map(({ node }) => (
            <Link to={node.fields.slug} key={node.internal.contentDigest}>
              <img
                alt={node.frontmatter.title}
                src={`${node.frontmatter.featured_image.src}?nf_resize=fit&w=${WIDTH}`}
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
          internal {
            contentDigest
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
