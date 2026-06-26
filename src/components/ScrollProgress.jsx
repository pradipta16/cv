import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      setWidth((doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100]">
      <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-75"
           style={{ width: `${width}%` }} />
    </div>
  )
}
