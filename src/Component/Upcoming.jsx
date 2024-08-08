import React, { useContext } from "react";
import Itemlist from "./Itemlist";
import { PostListContext } from "../store/Allstore";

function Upcoming() {
  const { upcomingPosts } = useContext(PostListContext);
  return (
    <>
      <div className="dataitem">
        {upcomingPosts.map((post, key) => (
          <Itemlist key={key} post={post} />
        ))}
      </div>
    </>
  );
}

export default Upcoming;
