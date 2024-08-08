import { useContext } from "react";
import { PostListContext } from "../store/Allstore";
import "./MainContainer.css";
import { Toaster } from "react-hot-toast";
import EditPost from "./EditPost";

function MainContainer({ sideon, content }) {
  const { postList,editBoxOpen } = useContext(PostListContext);

  return (
    <div className={`maincontainer ${sideon ? "containeroff" : "containeron"}`}>
      <Toaster position="bottom-left" reverseOrder={false} />
      {/* {postList.length === 0 ? "":""} */}
      {editBoxOpen && <EditPost/>}
      
      {content}
    </div>
  );
}

export default MainContainer;
