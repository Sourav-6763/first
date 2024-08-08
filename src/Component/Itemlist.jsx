// Itemlist.js
import React, { useContext, useRef } from "react";
import "./Itemlist.css";
import { PostListContext } from "../store/Allstore";
import { motion } from "framer-motion";

function Itemlist({ post, index }) {
  const { deletePost, EditPost } = useContext(PostListContext);


  let editHandel = () => {
    EditPost(index);
  };


  let deleteHandel = () => {
    deletePost(index);
  };

  const gradientColors = [
    "linear-gradient(135deg, #f403d1, #64b5f6)",
    "linear-gradient(90deg, #9ebd13 0%, #008552 100%)",
    "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
    "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
    "linear-gradient(90deg, #0700b8 0%, #00ff88 100%)",
  ];
  const backgroundStyle = {
    background: gradientColors[index % gradientColors.length],
  };
  const gradientClasses = [
    "gradient1",
    "gradient2",
    "gradient3",
    "gradient4",
    "gradient5",
  ];
  const constraintsRef = useRef(null);
  return (
    <motion.div className="container-border" ref={constraintsRef}>
      <motion.div
        className={`box ${gradientClasses[index % gradientClasses.length]}`}
        style={backgroundStyle}
        drag
        dragConstraints={constraintsRef}
        dragMomentum={true}
      >
        <h1>{post.title}</h1>
        <p>{post.des}</p>
        <p>{post.date}</p>
        <div className="buttons">
          <button onClick={editHandel}>Edit</button>
          <button onClick={deleteHandel}>Delete</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Itemlist;
