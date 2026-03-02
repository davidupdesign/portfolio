"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToHash() {
  // usePathname alone misses hash changes on same path
  // combining both forces re-run on any URL change
  const pathname = usePathname()

  useEffect(() => {
    // read hash directly from window every time
    const hash = window.location.hash
    if (!hash) return

    window.scrollTo(0, 0)

    const tryScroll = () => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" })
        return true
      }
      return false
    }

    // try immediately first
    if (tryScroll()) return

    // if element not found yet (page still rendering), keep retrying
    // every 100ms until found or 3 seconds pass
    let attempts = 0
    const interval = setInterval(() => {
      attempts++
      if (tryScroll() || attempts > 30) clearInterval(interval)
    }, 100)

    return () => clearInterval(interval)

  // window.location.href ensures this re-runs even when hash changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, typeof window !== "undefined" ? window.location.href : ""])

  return null
}