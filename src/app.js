import React from "react"
// import logo from "./logo.svg"
// import "./App.css"
import Header from "./components/header"
import Body from "./components/body"
import styled from "styled-components"

const Wrapper = styled.div`
  text-align: center;
  height: 100%;
`

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  )
}

export default App
