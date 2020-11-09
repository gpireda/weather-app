import { useEffect, useState } from 'react'

const mobileBreakpointUpTo = 767

function useViewport() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function handleResize() {
    setWidth(window.innerWidth)
  }

  return {
    isMobile: width <= mobileBreakpointUpTo,
  }
}

export default useViewport
