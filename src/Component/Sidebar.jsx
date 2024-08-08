import React, { useContext } from "react";
import "./Sidebar.css";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineUpcoming } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { PostListContext } from "../store/Allstore";
import { FaHome } from "react-icons/fa";

function Sidebar({ sideon, setSideon, setActiveContent, activeContent }) {
  const { postList, todayPosts, upcomingPosts } = useContext(PostListContext);

  return (
    <>
      <div className={`sidebar background ${sideon ? "sideon" : "sideoff"}`}>
        <div className="sidebarcontainer">
          <div className="menuAndMarberger ">
            <p className={sideon ? "Menushow" : "Menuhide"}>MENU</p>
            <IoMdMenu
              className="hamberger"
              onClick={() => setSideon(!sideon)}
            />
          </div>
          <div className="task">
            <h5>TASKS</h5>
            <div className="taskgroup">
              <p
                onClick={() => {
                  setActiveContent("home");
                }}
                className={activeContent === "home" && "para-active"}
              >
                <div className="taskgroupin">
                  <FaHome />
                  {sideon && "Home"}
                </div>
                {sideon && (
                  <button className="taskNum">{postList.length}</button>
                )}
              </p>

              <p
                onClick={() => {
                  setActiveContent("upcoming");
                }}
                className={`upcoming-para ${
                  activeContent === "upcoming" && "para-active"
                }`}
              >
                <div className="taskgroupin">
                  <MdOutlineUpcoming />
                  {sideon && "Upcoming"}
                </div>
                {sideon && (
                  <button className="taskNum">{upcomingPosts.length}</button>
                )}
              </p>
              <p
                onClick={() => {
                  setActiveContent("today");
                }}
                className={activeContent === "today" && "para-active"}
              >
                <div className="taskgroupin">
                  <MdOutlineCalendarToday />
                  {sideon && "Today"}
                </div>
                {sideon && (
                  <button className="taskNum">{todayPosts.length}</button>
                )}
              </p>
              <p
                onClick={() => {
                  setActiveContent("calender");
                }}
                className={activeContent === "calender" && "para-active"}
              >
                <div className="taskgroupin">
                  <SlCalender />
                  {sideon && "Calender"}
                </div>
                {sideon && (
                  <button className="taskNum">{postList.length}</button>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
