import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Header = styled.h1`
  @media screen and (min-width: 320px) {
    font-size: calc(30px + 6 * ((100vw - 320px) / 680));
}
@media screen and (min-width: 1000px) {
    font-size: ${scale(2).fontSize};
}
  ${
    "" /* font-size: ${scale(2).fontSize};
  line-height: ${scale(2).lineHeight};
  max-width: ${rhythm(40)};
  min-width: ${rhythm(15)};
  ${"" /* @media (min-width: ${rhythm(15)}) {
    font-size: ${scale(1.5).fontSize};
  } */
  } */}
`

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
          backgroundColor: "rebeccapurple",
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(48),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
