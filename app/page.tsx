"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FileText, Lock } from "lucide-react"
import BackgroundPaths from "@/components/kokonutui/background-paths"
import { motion } from "framer-motion"

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <BackgroundPaths title="SimonsNiobe Technologies" />

      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col items-center justify-center">
        
          
      </div>
    </div>
  )
}

