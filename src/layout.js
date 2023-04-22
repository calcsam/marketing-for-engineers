// take my page layout from index.js and put it here.
// this is the layout for the whole page

import React from "react"
import { Link } from "gatsby"
import ConvertKitForm from 'convertkit-react'

const MY_FORM_ID = 4992067


const pageStyles = {
  }

const Layout = ({ children }) => (  
    <main style={pageStyles} className="container prose prose-m lg:prose-lg prose-md prose-headings:font-sans prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-md prose-img:shadow-lg mt-8 border-spacing-2 mx-auto p-4 sm:p-6 lg:p-8 max-w-2xl">
        { children }
        <ConvertKitForm template='clare' formId={MY_FORM_ID} />
    </main>
)

export default Layout
