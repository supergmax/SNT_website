"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface SecurePdfViewerProps {
  pdfUrl: string
  doublePageMode?: boolean
}

export default function SecurePdfViewer({ pdfUrl, doublePageMode = true }: SecurePdfViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Disable right-click within the component
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener("load", () => {
        setIsLoading(false)

        // Try to access iframe content to disable right-click
        // Note: This may be blocked by CORS if the PDF is from a different origin
        try {
          const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document
          if (iframeDocument) {
            iframeDocument.addEventListener("contextmenu", handleContextMenu)
          }
        } catch (error) {
          console.log("Cannot access iframe content due to same-origin policy")
        }
      })
    }

    return () => {
      if (iframe) {
        try {
          const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document
          if (iframeDocument) {
            iframeDocument.removeEventListener("contextmenu", handleContextMenu)
          }
        } catch (error) {
          // Ignore CORS errors
        }
      }
    }
  }, [])

  // Construct PDF URL with parameters to disable toolbar and enable double page mode
  const enhancedPdfUrl = `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0${
    doublePageMode ? "&view=Fit&pagemode=thumbs&page=1" : ""
  }`

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-neutral-900 z-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-neutral-300 dark:border-neutral-700 border-t-amber-500 rounded-full animate-spin"></div>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">Chargement du document sécurisé...</p>
          </div>
        </div>
      )}

      <motion.iframe
        ref={iframeRef}
        src={enhancedPdfUrl}
        className="w-full h-full border-0"
        style={{
          pointerEvents: "none", // Disable interactions with the PDF
        }}
        title="Secure Document Viewer"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  )
}

