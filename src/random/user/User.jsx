import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./User.module.css";
import {
  decrement,
  getUser,
  increment,
  likeUser,
} from "../../features/userSlice";
import dislike from "../../images/dislike.png";
import like from "../../images/licke.png";

const User = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userSlice.user);
  // console.log("user");
  // console.log(user);

  const countLike = useSelector((state) => state.userSlice.valueLike);
  const countDislike = useSelector((state) => state.userSlice.valueDislike);

  return (
    <div>
      {user.map((user) => (
        <div key={user.id.value}>
          <img src={user.picture.large} alt="logo" />
          <div>
            <div>
              {user.name.first} {user.name.last}
            </div>
            <div>{user.cell}</div>
            <div>{user.location.city}</div>
          </div>
          <div
            className={style.container}
            onClick={() => {
              dispatch(decrement());
              dispatch(getUser());
            }}
          >
            <div className={style.centered}>{countDislike} </div>
            <img src={dislike} alt="logo" className={style.dislike} />
          </div>
          <div
            className={style.container}
            onClick={() => {
              dispatch(increment());
              dispatch(getUser());
              dispatch(likeUser(user));
            }}
          >
            <div className={style.centered}>{countLike}</div>
            <img className={style.like} alt="logo" src={like} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
