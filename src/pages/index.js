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
        <span className="font-semibold">Why do engineers distrust marketing?</span>
      </p>
      <p>
        Engineers will give you a variety of reasons:
      </p>
      <ul className="list-disc">
        <li className="group relative hover:text-blue-500 cursor-pointer">
          <b>Shallow and surface-level.</b> Most software marketers haven't used and don't understand the products they pitch.
          <img class="hidden sm:group-hover:block absolute left-[calc(50%+270px)] w-[calc(50vw-320px)] max-w-[300px] top-[calc(-25vw+170px)] mt-5" src="./fellow-kids.jpg" alt="Your image"></img>
        </li>
        <li className="">
          <b>In the wrong tone.</b> Engineers find most marketing communications vague and overenthuasiastic. 
        </li>
        <li className="group relative hover:text-blue-500 cursor-pointer">
          <b>Reduces trust.</b> Engineers are <i>happy</i> to trade their attention, but expect useful information in return. 
          <img class="hidden sm:group-hover:block absolute left-[calc(50%+270px)] w-[calc(50vw-320px)] max-w-[300px] top-[calc(-25vw+190px)] mt-5" src="./duty_calls.png" alt="Your image"></img>
        </li>      
      </ul>
      <p>
        Here's one irony. Engineers' marketing experience turns them skeptical of the whole field. Yet their depth, clarity, and rigor can make them quite talented marketers.       
      </p>
      <p>
        And in a world with lots of mediocre marketing, <span className="font-semibold">being able to market well is actually a superpower</span>. 
      </p>
      <p>
        <b>Hi, I'm Sam</b>. <a href="https://twitter.com/calcsam">I'm an engineer</a> and founder. Six years ago I cofounded <a href="https://twitter.com/gatsbyjs">@gatsbyjs</a> to turn the open-source project into a company. We grew to a few million dollars in revenue, and sold to our largest competitor, Netlify.
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
