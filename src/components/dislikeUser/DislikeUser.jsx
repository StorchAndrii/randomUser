import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./disLikeUser.module.css";

const DislikeUser = () => {
  const disLikeUser = useSelector((state) => state.userSlice.disLikeUser);
  console.log(disLikeUser);
  return (
    <div>
      DISLIKE
      <div className={style.likeUser}>
        {disLikeUser.map((disLikeUser) => (
          <NavLink
            key={disLikeUser.id.value}
            to={`/UserInfo/${disLikeUser.name.first}`}
          >
            <div className={style.img}>
              <img src={disLikeUser.picture.thumbnail} alt="logo" />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DislikeUser;
