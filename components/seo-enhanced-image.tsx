"use client"

import Image from "next/image"
import { useState } from "react"

interface SEOEnhancedImageProps {
  src: string
  alt: string
  width: number
  height: number
  title?: string
  caption?: string
  priority?: boolean
  className?: string
}

export function SEOEnhancedImage({
  src,
  alt,
  width,
  height,
  title,
  caption,
  priority = false,
  className = "",
}: SEOEnhancedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <figure className={`my-6 ${className}`}>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          title={title}
          priority={priority}
          className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
        {!isLoaded && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />}
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">{caption}</figcaption>
      )}
    </figure>
  )
}
