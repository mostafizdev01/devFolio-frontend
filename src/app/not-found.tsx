"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ProjectsSection/ProjectCard"
import { Button } from "../components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto min-h-dvh flex items-center w-full px-4 py-16">
      <Card className=" mx-auto w-lg text-center">
        <CardHeader>
          <div className="mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
            <span className="text-4xl font-bold text-muted-foreground">404</span>
          </div>
          <CardTitle>Page Not Found</CardTitle>
          <CardDescription>The page you're looking for doesn't exist or has been moved.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/">
            <Button className="w-full mb-3">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()} className="w-full">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
