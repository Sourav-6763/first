import React, { useContext, useRef } from "react";
import "./Item.css";
import Itemlist from "./Itemlist";
import { PostListContext } from "../store/Allstore";
import AddItem from "./AddItem";
import { IoIosAddCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

function Item({ boxopen, setBoxOpen }) {
  let poopupOpen = () => {
    setBoxOpen(!boxopen);
  };

  const { postList } = useContext(PostListContext);
  return (
    <>
      <div className={boxopen ? "additem-poopup" : "hideBox"}>
        <AddItem boxopen={boxopen} setBoxOpen={setBoxOpen} />
      </div>
      <motion.div
        className="additem "
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      >
        <IoIosAddCircleOutline onClick={poopupOpen} />
      </motion.div>

      <div className="dataitem">
        {postList.map((post, key) => (
          <Itemlist key={key} post={post} index={key} />
        ))}
      </div>
    </>
  );
}

export default Item;
