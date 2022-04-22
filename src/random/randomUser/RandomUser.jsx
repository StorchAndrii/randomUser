import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../features/userSlice";
import User from "../user/User";
import DislikeUser from "../dislikeUser/DislikeUser";
import LikeUser from "../likeUser/LikeUser";
import style from "./randomUser.module.css";

const RandomUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className={style.container}>
      <DislikeUser />
      <User />
      <LikeUser />
    </div>
  );
};

export default RandomUser;
