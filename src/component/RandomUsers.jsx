import React from "react";
import style from "./RandomUsers.module.css";

const RandomUsers = () => {
  return (
    <div>
      <div>
        <img
          className={style.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9UI1y4Shr253ibETjPCOWNBWWpKgQsVKaw&usqp=CAU"
          alt="logo"
        />
      </div>
      <div className="style.info">
        <div>name</div>
        <div>city, country</div>
        <div>email</div>
      </div>
      <div>
        <button>dislike</button>
        <button>like</button>
      </div>
    </div>
  );
};

export default RandomUsers;
