"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slider {
  children: React.ReactNode
  className?: String
}

const SliderCustom: React.FC<Slider> = ({ children, className }) => {
  const [showChevrons, setShowChevrons] = useState(false)

  const slideRight = () => {
    let slider = document.getElementById("slider")!
    slider.scrollLeft = slider.scrollLeft + 250
  }

  const slideLeft = () => {
    let slider = document.getElementById("slider")!
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
        id="slider"
        className={`h-70 scrollbar-hidden relative flex h-auto w-full items-center overflow-x-scroll scroll-smooth px-10 ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>

      {showChevrons && (
        <>
          <div
            className="bg-opacity/75 absolute right-10 top-1/2 z-0  m-auto flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white"
            onClick={slideRight}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ChevronRight />
          </div>

          <div
            className="bg-opacity/75 absolute left-10 top-1/2 z-0  m-auto flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white"
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
