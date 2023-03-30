// take my page layout from index.js and put it here.
// this is the layout for the whole page

import React from "react"
import { Link } from "gatsby"
import ConvertKitForm from 'convertkit-react'

const MY_FORM_ID = 4992067


const pageStyles = {
    padding: 96,
  }

const Layout = ({ children }) => (  
    <main style={pageStyles} className="container mx-auto px-4 sm:px-6 max-w-2xl prose prose-m lg:prose-lg prose-md prose-headings:font-sans prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-md prose-img:shadow-lg mt-8">
        { children }
        <ConvertKitForm template='clare' formId={MY_FORM_ID} />
    </main>
)

export default Layout
