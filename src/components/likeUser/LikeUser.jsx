import React from "react";
import { useSelector } from "react-redux";
import style from "./likeUser.module.css";
import { NavLink } from "react-router-dom";

const LikeUser = () => {
  const likeUser = useSelector((state) => state.userSlice.likeUser);

  return (
    <div className={style.container}>
      LIKE
      <div className={style.likeUser}>
        {likeUser.map((likeUser) => (
          <NavLink
            key={likeUser.id.value}
            to={`/UserInfo/${likeUser.name.first}`}
          >
            <div className={style.img}>
              <img src={likeUser.picture.thumbnail} alt="logo" />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LikeUser;
