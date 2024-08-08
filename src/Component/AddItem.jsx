import React, { useContext, useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import "./Additem.css";
import { PostListContext } from "../store/Allstore";
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import toast  from "react-hot-toast";

function AddItem({ boxopen, setBoxOpen }) {
  const { AddPost } = useContext(PostListContext);

  const userTitle = useRef();
  const userDes = useRef();
  const [userDate, setUserDate] = useState(null);

  const fromsubmithandel = (e) => {
    e.preventDefault();
    const uTitle = userTitle.current.value;
    const uDes = userDes.current.value;
    const uDate = userDate ? userDate.format() : null;
    AddPost({ uTitle, uDes, uDate });
    toast.success("Successfully added");
    setBoxOpen(false);
  };

  const handelclick = () => {
    setBoxOpen(!boxopen);
  };

  return (
    <>
      <div className="fromContainer">
        <h1>Make Your Day Awesome</h1>
        <form action="" onSubmit={fromsubmithandel}>
          <div className="inputField">
            <label htmlFor="uTitle">Title</label>
            <input type="text" id="uTitle" name="uTitle" ref={userTitle} />
            <br />
          </div>
          <div className="inputField">
            <label htmlFor="uBody">Description</label>
            <input type="text" id="uBody" name="uBody" ref={userDes} />
            <br />
          </div>
          <div className="inputField">
            <label htmlFor="uDate">Date</label>

            <DatePicker
              render={<InputIcon />}
              id="uDate"
              name="uDate"
              format="YYYY-MM-DD"
              value={userDate}
              onChange={setUserDate}
            />
          </div>
          <div className="Button-submit">
            <button>Submit</button>
          </div>
        </form>
        <span className="deleteicon" onClick={handelclick}>
          <AiFillDelete />
        </span>
      </div>
    </>
  );
}

export default AddItem;
