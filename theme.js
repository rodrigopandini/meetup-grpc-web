// example theme.js
import { dark as theme } from 'mdx-deck/themes'
import vs from 'react-syntax-highlighter/styles/prism/vs'
import prismGo from 'react-syntax-highlighter/languages/prism/go'
import prismProtobuf from 'react-syntax-highlighter/languages/prism/protobuf'
import vsDark from "prism-react-renderer/themes/vsDark"

export default {
  ...theme,
  font: 'Roboto, sans-serif',
  colors: {
    ...theme.colors,
    background: '#333',
    link: '#0ff',
  },  
  blockquote: {
    fontStyle: 'italic'
  },
  prism: {
    style: vs,
    languages: {
      go: prismGo,
      protobuf: prismProtobuf
    }
  },
  codeSurfer: {
    ...vsDark,
    showNumbers: false
  }
}
