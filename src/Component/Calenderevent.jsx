import React, { useContext, useState } from "react";
import { PostListContext } from "../store/Allstore";
import  { Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/red.css";

function Calenderevent() {
  const { postDates } = useContext(PostListContext);
  const [values, setValues] = useState(postDates);

  return (
    <Calendar
      multiple
      value={values}
      onChange={setValues}
      className="red"
      readOnly
    />
  );
}

export default Calenderevent;
