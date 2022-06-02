import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "app"
import reportWebVitals from "./reportWebVitals"
import { createGlobalStyle } from "styled-components"

const styled = { createGlobalStyle }

const GlobalStyle = styled.createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    /* background-color: red; */
  }
`

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
