import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import { css } from "@emotion/core"

/*

  */

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          css={css`
            @media screen and (min-width: 320px) {
              font-size: ${scale(1.4).fontSize};
            }
            @media screen and (min-width: 1000px) {
              font-size: ${scale(2).fontSize};
            }
          `}
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            marginLeft: `auto`,
            marginRight: `auto`,
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(48),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          height: "100%",
          display: "grid",
          gridTemplateRows:
            "minmax(min-content, max-content) minmax(min-content, max-content) 0.2fr",
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          css={css`
            grid-row: 4 / 5;
            align-self: end;
          `}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
