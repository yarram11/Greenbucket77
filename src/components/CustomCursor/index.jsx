"use client"; 
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768); // Check if screen width is desktop size (>=768px)
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    const handleMouseMove = (e) => {
      if (isDesktop) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    if (isDesktop) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateScreenSize);
    };
  }, [isDesktop]);

  if (!isDesktop) return null; // Do not render on mobile

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
      <div
        className="custom-cursor-ring"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
