"use client"

import { usePathname } from "next/navigation"
import PageTransition from "./PageTransition"

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  return <PageTransition key={pathname}>{children}</PageTransition>
}