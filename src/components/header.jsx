import React, { useState, useCallback } from "react"
import styled from "styled-components"
import useDocumentScrollThrottled from "hooks/use-document-scroll-throttled"

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 86px;
  background-color: #fff;
  color: #333;
  transform: translateY(0);
  transition: transform 0.3s ease;

  &.shadow {
    box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);
  }

  &.hidden {
    transform: translateY(-110%);
  }

  div {
    margin: 0 24px;
    font-size: 28px;
    color: #f59596;
  }

  ul {
    padding: 0;
    margin: 0 24px;
  }

  li {
    display: inline-block;
    margin: 0 12px;
    cursor: pointer;
  }
`

const MenuBar = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const MINIMUM_SCROLL = 80
  const TIMEOUT_DELAY = 400

  const memorizedCallback = useCallback((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData

    // console.log("prev ", previousScrollTop, " current ", currentScrollTop)

    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowShadow(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  }, [])

  useDocumentScrollThrottled(memorizedCallback)

  const shadowStyle = shouldShowShadow ? "shadow" : ""
  const hiddenStyle = shouldHideHeader ? "hidden" : ""

  return (
    <Header className={`${hiddenStyle} ${shadowStyle}`}>
      <div>Logo</div>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>join</li>
      </ul>
    </Header>
  )
}

export default MenuBar
