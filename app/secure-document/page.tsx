"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Lock, Shield } from "lucide-react"
import { motion } from "framer-motion"
import BackgroundPaths from "@/components/kokonutui/background-paths"
import NSLogo from "@/components/ns-logo"

export default function SecureDocumentViewer() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  // Disable right-click
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    document.addEventListener("contextmenu", handleContextMenu)

    // Set loading state
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <BackgroundPaths title="" />
      </div>

      {/* Action Bar */}
      <div className="action-bar">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/")}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </div>

          <Badge variant="default" className="secure-pulse">
            <Lock className="h-3 w-3 mr-1" />
            Document sécurisé
          </Badge>
        </div>
      </div>

      {/* Title */}
      <div className="relative z-10 w-full py-4 text-center">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Document sécurisé
        </motion.h1>
      </div>

      {/* NS Logo Viewer */}
      <div className="flex-1 relative z-10 container mx-auto px-4 pb-8">
        <motion.div
          className="secure-document-container no-select"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-muted border-t-security-primary rounded-full animate-spin"></div>
                <p className="mt-4 text-muted-foreground">Chargement du document sécurisé...</p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex justify-center" onContextMenu={(e) => e.preventDefault()}>
              <NSLogo />
            </div>
          )}
        </motion.div>

        {/* Security Notice */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-security-primary/5 text-sm text-security-primary">
            <Shield className="h-4 w-4 mr-2" />
            <p>Ce document est protégé. Toute tentative de téléchargement ou de capture d'écran est enregistrée.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

