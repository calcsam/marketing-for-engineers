import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../layout.js"
import BlockContent from "@sanity/block-content-to-react"


export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { title, publishedAt, _rawBody } = data.sanityPost // data.markdownRemark holds your post data
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h2>{publishedAt}</h2>
        <BlockContent blocks={_rawBody} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    sanityPost(id: { eq: $id }) {
      title
      publishedAt(formatString: "MMMM DD, Y")
      slug {
        current
      }
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`