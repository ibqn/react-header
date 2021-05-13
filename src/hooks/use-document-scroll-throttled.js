import { useState, useEffect } from "react"
import { throttle } from "lodash"

const useDocumentScrollThrottled = callback => {
  const [, setScrollPosition] = useState(0)

  useEffect(() => {
    let previousScrollTop = 0

    const handleDocumentScroll = () => {
      const { scrollTop: currentScrollTop } =
        document.documentElement || document.body

      setScrollPosition(previousPosition => {
        previousScrollTop = previousPosition
        return currentScrollTop
      })

      callback({ previousScrollTop, currentScrollTop })
    }

    const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250)

    window.addEventListener("scroll", handleDocumentScrollThrottled)

    return () =>
      window.removeEventListener("scroll", handleDocumentScrollThrottled)
  }, [callback])
}

export default useDocumentScrollThrottled
