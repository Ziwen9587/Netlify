import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <div class="content nav">
        <div class="header">
          <ul>
            <h3>
              {/* <a><Link to="/">Homepage</Link></a> */}
              <a href="https://daomao-first-netlify-site.netlify.app"><li>Home</li></a>
              {/* <a><Link to="/page-2/">Page_2</Link></a> */}
              <a href="https://daomao-first-netlify-site.netlify.app/page-2/"><li>Page_2</li></a>
              {/* <a><Link to="/using-typescript/">GoToUsingTypescript</Link></a> */}
              <a href="https://daomao-first-netlify-site.netlify.app/using-typescript/"><li>GoToUsingTypescript</li></a>
            </h3>
          </ul>
        </div>
      </div>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
