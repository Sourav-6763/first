import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import Wrapperbox from "./Wrapperbox";
import Allstore from "../store/Allstore";
import Upcoming from "./Upcoming";
import Calenderevent from "./Calenderevent";
import Today from "./Today";
import Item from "./Item";

function Mainpage() {
  let [sideon, setSideon] = useState(false);
  let [activeContent, setActiveContent] = useState("home");
  let [boxopen, setBoxOpen] = useState(false);


  let content;
  if (activeContent === "upcoming") {
    content = <Upcoming />;
  } else if (activeContent === "today") {
    content = <Today />;
  } else if (activeContent === "calender") {
    content = <Calenderevent />;
  } else if (activeContent === "home") {
    content = <Item boxopen={boxopen} setBoxOpen={setBoxOpen} />;
  }



  return (
    <>
      <Wrapperbox>
        <Allstore>
          <Sidebar
            sideon={sideon}
            setSideon={setSideon}
            setActiveContent={setActiveContent}
            activeContent={activeContent}
          />
          <MainContainer
            sideon={sideon}
            setSideon={setSideon}
            content={content}
          />
    
        </Allstore>
      </Wrapperbox>
    </>
  );
}

export default Mainpage;
