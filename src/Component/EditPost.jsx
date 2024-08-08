import React, { useContext, useRef, useState } from "react";
import { PostListContext } from "../store/Allstore";
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";

function EditPost() {
  const { editBoxOpen, u, seteditBoxOpen, EditFinalPost } =
    useContext(PostListContext);

  const userTitle = useRef();
  const userDes = useRef();
  // const [userDate, setUserDate] = useState(null);

  const Editfromsubmithandel = (e) => {
    e.preventDefault();
    const uTitle = userTitle.current.value;
    const uDes = userDes.current.value;

    // const uDate = userDate ? userDate.format() : null;
    EditFinalPost({ uTitle, uDes });
    seteditBoxOpen(!editBoxOpen);
  };

  return (
    <>
      <div
        className={`${editBoxOpen ? "Editboxon additem-poopup" : "Editboxoff"}`}
      >
        <div className="editContainer">
          <form action="" onSubmit={Editfromsubmithandel} className="editform">
            <div className="inputEditField">
              <label htmlFor="uTitle">Title</label>
              <input
                type="text"
                id="uTitle"
                name="uTitle"
                defaultValue={u[0].title}
                ref={userTitle}
              />
              <br />
            </div>

            <div className="inputEditField">
              <label htmlFor="uTitle">Description</label>
              <input
                type="text"
                id="uTitle"
                name="uTitle"
                defaultValue={u[0].des}
                ref={userDes}
              />
              <br />
            </div>

            {/* <div className="inputField">
              <label htmlFor="uDate">Date</label>
              <DatePicker
                render={<InputIcon />}
                id="uDate"
                name="uDate"
                format="YYYY-MM-DD"
                value={u[0].date}
              />
            </div> */}
            <div className="editbutton-group">
              <button
                type="submit"
                className="editButton"
                onClick={Editfromsubmithandel}
              >
                Save
              </button>
              <button
                className="editButton"
                onClick={() => seteditBoxOpen(!editBoxOpen)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditPost;
