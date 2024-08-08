import React, { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({});

const postListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      return state.filter((v, i) => i != action.payload.index);
    case "EDIT_POST":
      return state.map((post, i) => {
        if (i === action.payload.index) {
          return {
            ...post,
            title: action.payload.title,
            des: action.payload.des,
          };
        }
        return post;
      });
    default:
      return state;
  }
};

const Allstore = ({ children }) => {
  const DEFAULT_POST_LIST = [
    {
      title: "Going to Mumbai",
      des: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
      date: "2024-08-09",
    },
    {
      title: "Paas ho bhai",
      des: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
      date: "2024-08-04",
    },
  ];

  const [postDates, setPostDates] = useState([]);
  const [todayPosts, setTodayPosts] = useState([]);
  const [upcomingPosts, setUpcomingPosts] = useState([]);
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const [editBoxOpen, seteditBoxOpen] = useState(false);

  const AddPost = ({ uTitle, uDes, uDate }) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        title: uTitle,
        des: uDes,
        date: uDate,
      },
    });
  };

  const deletePost = (index) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        index,
      },
    });
  };

  const [u, setu] = useState([]);
  const [indexvalue, setIndexvalue] = useState();

  const EditPost = (index) => {
    setIndexvalue(index);
    let updateddata = postList.filter((v, i) => i === index);
    setu(updateddata);
    seteditBoxOpen(!editBoxOpen);
  };

  const EditFinalPost = ({ uTitle, uDes }) => {
    dispatchPostList({
      type: "EDIT_POST",
      payload: {
        title: uTitle,
        des: uDes,
        index: indexvalue,
      },
    });
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  useEffect(() => {
    const filteredTodayPosts = postList.filter(
      (post) => post.date === formattedDate
    );

    // Set today's posts
    setTodayPosts(filteredTodayPosts);

    const filteredUpcomingPosts = postList.filter(
      (post) => post.date !== formattedDate
    );
    // Set upcoming's posts
    setUpcomingPosts(filteredUpcomingPosts);

    // Set all post dates
    const dates = postList.map((post) => post.date);
    setPostDates(dates);
  }, [postList]);

  return (
    <PostListContext.Provider
      value={{
        AddPost,
        postList,
        postDates,
        todayPosts,
        upcomingPosts,
        deletePost,
        EditPost,
        editBoxOpen,
        u,
        seteditBoxOpen,
        EditFinalPost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default Allstore;
