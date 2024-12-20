"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import { Suspense } from "react"

function UbuntuServerTroubleshootingContent() {
  const searchParams = useSearchParams()
  const returnTo = searchParams.get('returnTo') || ''

  return (
    <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black bg-opacity-60 text-white p-8">
        <div className="max-w-3xl mx-auto bg-black bg-opacity-70 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-neon-pink">Ubuntu Server Troubleshooting</h1>
          <p className="text-neon-blue mb-4">
            In this project, I diagnosed and resolved boot failure and internet connectivity issues on an Ubuntu 22.04 server, implementing permanent solutions without reverting to an older kernel.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-neon-green">Key Achievements</h2>
          <ul className="list-disc list-inside mb-6 text-neon-blue">
            <li>Diagnosed and resolved boot failure issues</li>
            <li>Fixed internet connectivity problems</li>
            <li>Implemented permanent solutions without kernel downgrade</li>
            <li>Utilized Linux command-line tools for troubleshooting</li>
            <li>Analyzed system logs to identify root causes</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4 text-neon-green">Technologies Used</h2>
          <ul className="list-disc list-inside mb-6 text-neon-blue">
            <li>Ubuntu 22.04 Server</li>
            <li>Linux Command Line</li>
            <li>System Logs Analysis</li>
            <li>Network Troubleshooting</li>
            <li>Kernel Management</li>
          </ul>
          <Link href={`/?section=${returnTo}`} passHref>
            <Button className="bg-neon-pink hover:bg-pink-700 text-white relative group">
              <span className="absolute -inset-0.5 bg-neon-pink opacity-75 group-hover:opacity-100 rounded-lg blur transition duration-300 group-hover:duration-200 animate-tilt"></span>
              <span className="relative">Back to Portfolio</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function UbuntuServerTroubleshooting() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UbuntuServerTroubleshootingContent />
    </Suspense>
  )
}

