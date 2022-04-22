import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { userName } = useParams();

  const infoUsers = useSelector((state) => state.userSlice.likeUser);
  const nameUserInfo = infoUsers.find(
    (nameUserInfo) => nameUserInfo.name.first === userName
  );

  return (
    <div>
      Тут будет полная информация :)
      <div>
        <img src={nameUserInfo.picture.large} alt="" />
      </div>
      <ul>
        <li>first name: {nameUserInfo.name.first}</li>
        <li>last name: {nameUserInfo.name.last} </li>
        <li>age: {nameUserInfo.dob.age}</li>
        <li>email: {nameUserInfo.email}</li>
        <li>phone: {nameUserInfo.phone}</li>
        <li>city: {nameUserInfo.location.city}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
