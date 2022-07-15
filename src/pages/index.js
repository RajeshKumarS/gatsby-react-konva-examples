import * as React from "react"
import githubP from "../images/GitHub-Mark-32px.png"

// styles
const pageStyles = {
  color: "#232129",
  padding: "48px 96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
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

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

// data
const links = [
  {
    text: "Overview",
    url: "/Overview",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/index.html',
    color: "#E95800",
  },
  {
    text: "Basic Shapes",
    url: "/Shapes",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Shapes.html',
    color: "#E95800",
  },
  {
    text: "Custom Shape",
    url: "/Custom_Shape",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Custom_Shape.html',
    color: "#E95800",
  },
  {
    text: "Events",
    url: "/Events",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Events.html',
    color: "#E95800",
  },
  {
    text: "Images",
    url: "/Images",
    description:
      "npm install use-image\nOriginal example: ",
    original: 'https://konvajs.org/docs/react/Images.html',
    color: "#E95800",
  },
  {
    text: "Filters",
    url: "/Filters",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Filters.html',
    color: "#E95800",
  },
  {
    text: "Drag and Drop",
    url: "/Drag_And_Drop",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Drag_And_Drop.html',
    color: "#E95800",
  },
  {
    text: "Refs and Konva Nodes",
    url: "/Access_Konva_Nodes",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Access_Konva_Nodes.html',
    color: "#E95800",
  },
  {
    text: "Transformer",
    url: "/Transformer",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Transformer.html',
    color: "#E95800",
  },
  {
    text: "Simple Animations",
    url: "/Simple_Animations",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Simple_Animations.html',
    color: "#E95800",
  },
  {
    text: "Complex Animations",
    url: "/Complex_Animations",
    description:
      "npm install @react-spring/konva --force\nOriginal example: ",
    original: 'https://konvajs.org/docs/react/Complex_Animations.html',
    color: "#E95800",
  },
  {
    text: "DOM Portal",
    url: "/DOM_Portal",
    description:
      "npm install react-konva-utils\nOriginal example: ",
    original: 'https://konvajs.org/docs/react/DOM_Portal.html',
    color: "#E95800",
  },
  {
    text: "Canvas Portal",
    url: "/Canvas_Portal",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Canvas_Portal.html',
    color: "#E95800",
  },
  {
    text: "Canvas Export",
    url: "/Canvas_Export",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Canvas_Export.html',
    color: "#E95800",
  },
  {
    text: "Undo/Redo",
    url: "/Undo-Redo",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Undo-Redo.html',
    color: "#E95800",
  },
  {
    text: "Changing zIndex",
    url: "/zIndex",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/zIndex.html',
    color: "#E95800",
  },
  {
    text: "Drop DOM Image Into Canvas",
    url: "/Drop_Image",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Drop_Image.html',
    color: "#E95800",
  },
  {
    text: "Free Drawing",
    url: "/Free_Drawing",
    description:
      "Original example: ",
    original: 'https://konvajs.org/docs/react/Free_Drawing.html',
    color: "#E95800",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h2>Getting started with Gatsby and react-konva</h2>
      <a href="https://github.com/rajeshkumars/gatsby-react-konva-examples"><img src={githubP} width="24px" alt="" />
      <span style={{fontSize:"18px", marginLeft:"4px", verticalAlign:"top"}}>gatsby-react-konva-examples</span></a>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              <br />
              <span style={{...descriptionStyle,  whiteSpace: "pre-line"}}>{link.description}</span>
              <a href={link.original} style={{...descriptionStyle, color: link.color }}>{link.original}</a>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
