import React, { useEffect, useState } from "react";
import { motion, useTime, useTransform } from "framer-motion";

import { Link } from "react-router-dom";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);



    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

 

  const variants = {
    default: {
      x: mousePosition.x - 16, // Adjust based on half the cursor size
      y: mousePosition.y - 16, // Adjust based on half the cursor size
      transition: {
        type: "smooth",
        duration: 0,
        ease: "backOut",
      },
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50, // Adjust based on half the div size
      y: mousePosition.y - 50, // Adjust based on half the div size
      backgroundColor: "yellow",
      mixBlendMode: "difference",
      transition: {
        type: "smooth",
        duration: 0,
      },
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  return (
    <>
      <div className="container">
        <img
          src="src/Images/Osum-Walls-FireWatch-Images.jpg"
          alt="Background"
        />
        <div className="overlay">
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title'>Hello World</h1>
          <Link to="/mainpage">Get start</Link>
        </div>
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 32, // Define cursor size
            height: 32, // Define cursor size
            backgroundColor: "white",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      </div>
    </>
  );
}

export default Home;
