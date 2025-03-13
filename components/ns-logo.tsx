"use client"

import { useEffect, useRef } from "react"

export default function NSLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 600
    canvas.height = 800

    // Draw black bands at top and bottom
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, 100)
    ctx.fillRect(0, canvas.height - 100, canvas.width, 100)

    // Fill the rest with white
    ctx.fillStyle = "white"
    ctx.fillRect(0, 100, canvas.width, canvas.height - 200)

    // Draw the intertwined NS logo
    ctx.fillStyle = "black"
    ctx.font = "bold 280px serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    // Draw the N
    ctx.save()
    ctx.translate(canvas.width / 2 - 40, canvas.height / 2)
    ctx.fillText("N", 0, 0)
    ctx.restore()

    // Draw the S
    ctx.save()
    ctx.translate(canvas.width / 2 + 40, canvas.height / 2)
    ctx.fillText("S", 0, 0)
    ctx.restore()

    // Add a subtle watermark
    ctx.save()
    ctx.globalAlpha = 0.05
    ctx.font = "20px sans-serif"
    ctx.fillText("DOCUMENT SÉCURISÉ", canvas.width / 2, canvas.height - 120)
    ctx.restore()
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center bg-white no-select">
      <canvas ref={canvasRef} className="max-w-full max-h-full" style={{ maxHeight: "100%", maxWidth: "100%" }} />
    </div>
  )
}

