import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

import Layout from '../components/layout'
import BlogPosts from '../components/BlogPosts/BlogPosts';

class HomeIndex extends React.Component {

    render() {
        const { data } = this.props
        const siteDescription = "Simple Rules can yield Beautiful Patterns"
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges

        return (
            
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>
                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Welcome!</h2>
                        </header>
                        <p>
                            Thank you for visiting us! We are in the process of developing our page.
                            <br />meanwhile... 
                            <br /><strong>Follow us on <a href="https://twitter.com/tiagosomda/" className="icon fa-twitter">@tiagosomda</a></strong> for updates.
                        </p>
                    </section>
                    
                   <BlogPosts posts={posts} />
                </div>

            </Layout>
        )
    }
}

export default HomeIndex

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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`


