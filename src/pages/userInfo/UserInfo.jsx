import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Map from "../../components/map/Map";
import style from "./UserInfo.module.css";

const UserInfo = () => {
  const { userName } = useParams();

  const likeUser = useSelector((state) => state.userSlice.likeUser);
  const disLikeUser = useSelector((state) => state.userSlice.disLikeUser);

  const nameUserInfo =
    likeUser.find((nameUserInfo) => nameUserInfo.name.first === userName) ||
    disLikeUser.find((nameUserInfo) => nameUserInfo.name.first === userName);

  return (
    <div>
      User Info
      <div className={style.main}>
        <div className={style.div_img}>
          <img src={nameUserInfo.picture.large} alt="" />
        </div>
        <ul className={style.div_li}>
          <li>first name: {nameUserInfo.name.first}</li>
          <li>last name: {nameUserInfo.name.last} </li>
          <li>age: {nameUserInfo.dob.age}</li>
          <li>email: {nameUserInfo.email}</li>
          <li>phone: {nameUserInfo.phone}</li>
          <li>city: {nameUserInfo.location.city}</li>
        </ul>
        <div className={style.div_map}>
          <Map coordinates={nameUserInfo.location.coordinates} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
