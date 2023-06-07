"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slider {
  children: React.ReactNode
  className?: String
  id: string
}

const SliderCustom: React.FC<Slider> = ({ children, className, id }) => {
  const [showChevrons, setShowChevrons] = useState(false)

  const slideRight = () => {
    let slider = document.getElementById(id)!
    slider.scrollLeft = slider.scrollLeft + 250
  }

  const slideLeft = () => {
    let slider = document.getElementById(id)!
    slider.scrollLeft = slider.scrollLeft - 250
  }

  const handleMouseEnter = () => {
    setShowChevrons(true)
  }

  const handleMouseLeave = () => {
    setShowChevrons(false)
  }

  return (
    <>
      <div
        id={id}
        className={`scroll-bar-kit h-70 flex h-auto w-full items-center overflow-x-scroll scroll-smooth pl-2 ${className}`}
        style={{ scrollbarWidth: "none" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>

      {showChevrons && (
        <>
          <div
            className="absolute right-10 z-10 m-auto flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-75"
            style={{ top: "42%" }}
            onClick={slideRight}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ChevronRight />
          </div>

          <div
            className="absolute left-10 top-1/2 z-10 m-auto  flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-75"
            style={{ top: "42%" }}
            onClick={slideLeft}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ChevronLeft />
          </div>
        </>
      )}
    </>
  )
}

export default SliderCustom
