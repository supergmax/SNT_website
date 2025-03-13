import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: NextRequest) {
  // Get the document ID from the request
  const searchParams = request.nextUrl.searchParams
  const documentId = searchParams.get("id")

  // Validate the document ID and user permissions here
  // This is where you would implement your authentication logic

  // For demo purposes, we'll just serve a sample PDF
  const filePath = path.join(process.cwd(), "public", "sample-document.pdf")

  try {
    const fileBuffer = fs.readFileSync(filePath)

    // Set security headers to prevent downloading
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="secure-document.pdf"',
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "X-Frame-Options": "DENY",
        "Content-Security-Policy": "default-src 'self'; object-src 'self'; script-src 'none'",
      },
    })

    return response
  } catch (error) {
    console.error("Error serving PDF:", error)
    return new NextResponse("Document not found", { status: 404 })
  }
}

