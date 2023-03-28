import * as React from "react"

import ConvertKitForm from 'convertkit-react'

const MY_FORM_ID = 4992067

const pageStyles = {
  padding: 96,
}
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
const IndexPage = () => {
  return (
    <main style={pageStyles} className="container mx-auto px-4 sm:px-6 max-w-2xl prose prose-m lg:prose-lg prose-md prose-headings:font-sans prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-md prose-img:shadow-lg mt-8">
      <h1>
        Marketing for Engineers
      </h1>
      <p className="prose prose-lg lg:prose-xl prose-slate">
        <span className="font-semibold">Most engineers distrust marketing.</span> And for good reason. 
      </p>
      <p>
        Most software marketing: 
      </p>
      <ul className="list-disc">
        <li className="group relative hover:text-blue-500 cursor-pointer">
          <b>feels unnatural.</b> Sophisticated users can spot marketers who don't understand their product. 
          <img class="hidden group-hover:block absolute left-[calc(50%+270px)] w-[calc(50vw-320px)] max-w-[300px] -top-44" src="./fellow-kids.jpg" alt="Your image"></img>
        </li>
        <li className="group relative hover:text-blue-500 cursor-pointer">
          <b>lacks domain knowledge.</b> Engineers will <i>happily</i> trade attention to get (or give) useful information. Or watch interesting flamewars.
          <img class="hidden group-hover:block absolute left-[calc(50%+270px)] w-[calc(50vw-320px)] max-w-[300px] -top-44" src="./duty_calls.png" alt="Your image"></img>
        </li>      
      </ul>
      <p>
        One possibility: if most marketing is mediocre, <span className="font-semibold">being able to market well is actually a superpower</span>, because it's a breath of fresh air to other engineers. 
      </p>
      <p>
        <b>Hi, I'm Sam</b>. <a href="https://twitter.com/calcsam">I'm an engineer</a> and founder. Six years ago I cofounded <a href="https://twitter.com/gatsbyjs">@gatsbyjs</a> to turn the open-source project into a company. We built a 50-person org, raised venture capital, grew to a few million dollars in revenue, and sold to our largest competitor, Netlify.
      </p>
      <p>
        As Gatsby matured, I found myself doing more and more things that fell under "marketing."
      </p>
      <p> 
        I wrote customer stories. Ran webinars. Organized the docs. Delivered conference talks. Tweaked lead scoring. Edited launch announcements. Talked to press. Published a book.
      </p>
      <p>
        If a pianist picks up the sax, are they a jazz band?
      </p>
      <p>
        In a year or two, I'll probably start something new. But until then, I'll be sharing my lessons here, along with other engineers who've ended up as marketing experts.
      </p>
      <p>
        You'll probably find this interesting if:
      </p>
      <ul className="list-disc">
        <li>
          you work at a startup or small company, or with marketing: <b>product engineer</b>, <b>web developer</b>, <b>growth engineer</b>, <b>marketing engineer</b>, <b>DevRel</b>...
        </li>
        <li>
          or if you're thinking of starting a company, or already have: <b>indie hacker</b>, <b>bootstrapper</b>, <b>current or future founder</b>
        </li>
        <li>
          or if you lead eng projects in a large organization and want more visibility/adoption: <b>staff engineer+</b>, <b>eng manager</b>, <b>eng director</b>... 
        </li>
      </ul>
      <ConvertKitForm template='clare' formId={MY_FORM_ID} />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
