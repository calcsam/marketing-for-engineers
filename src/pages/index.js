import * as React from "react"
import { Link, graphql} from 'gatsby'
import Layout from "../layout.js"

const headingStyles = {
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]
// dark:prose-invert dark:prose-headings:text-slate-300  dark:prose-a:text-blue-400
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>
        Marketing for Engineers
      </h1>
      <p className="prose prose-lg lg:prose-xl prose-slate">
        <span className="font-semibold">Great marketing is rare.</span>
      </p>
      <p>
        <b>Hi, I'm Sam</b>. <a href="https://twitter.com/calcsam">I'm an engineer</a> and founder. Six years ago I cofounded <a href="https://twitter.com/gatsbyjs">@gatsbyjs</a> to turn the open-source project into a company. We grew to a few million dollars in revenue, and sold to our largest competitor, Netlify.
      </p>
      <p>
        As Gatsby matured, I ended up doing more and more "marketing" things. Over time, I found that great marketing required a similar kind of analytical depth, clarity of purpose, polish, and iteration as great engineering.
      </p>
      <p>
        I'm sharing some things I learned along the way. If you're an engineer who's interested in marketing, you should sign up.
      </p>
      <ul>
        {
          data.allSanityPost.nodes.map((post) => {
            return (
              <li>
                <span>{post.publishedAt}:</span>&nbsp;
                <Link to={post.slug.current}><span>{post.title}</span></Link>
              </li>
            )
          })
        }
      </ul>

    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export const pageQuery = graphql`
  query HomePageQuery {
    allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        title
        publishedAt(formatString: "MMMM DD, Y")
        slug {
          current
        }
      }
    }
  }
`

export default IndexPage
