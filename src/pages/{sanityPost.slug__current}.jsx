import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../layout.js"
import BlockContent from "@sanity/block-content-to-react"
import {PortableText} from '@portabletext/react'


const TableRowComponent = ( { row: cells, head } ) => (
  head ?
    <thead class="bg-slate-50 rounded-xl">
    { 
        cells.cells.map(cell => (
          <th class="border-b dark:border-slate-600 font-medium p-3 pl-8 text-slate-400 dark:text-slate-200 text-left align-middle">
            <h4 class="mt-0 mb-0 pt-0 pb-0">{cell}</h4>
          </th>
        ))
    }
  </thead> :
  <tr>
    { 
        cells.cells.map(cell => (
          <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
            {cell}
          </td>
        ))
    }
  </tr>
)
const TableComponent = ({ value: rows }) => (
  <table class="table-auto rounded-xl">
    {
      rows.rows.map((row, i) => (
        <TableRowComponent row={row} head={!i} />
      ))
    }
  </table>
)


export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { title, publishedAt, _rawBody } = data.sanityPost // data.markdownRemark holds your post data
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h2>{publishedAt}</h2>
        <PortableText 
          value={_rawBody} 
          components={{
            types: {
              table: TableComponent
            }
          }}
        />
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