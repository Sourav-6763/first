import React, { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/Allstore";
import Itemlist from "./Itemlist";

function Today() {
  const { todayPosts } = useContext(PostListContext);
  const [todayPostst, setTodayPostst] = useState([]);


  useEffect(() => {
    setTodayPostst(todayPosts);
  }, [todayPosts]); // Run effect when todayPosts change

  return (
    <div className="dataitem">
      {todayPostst.map((post, key) => (
        <Itemlist key={key} post={post} />
      ))}
    </div>
  );
}

export default Today;
