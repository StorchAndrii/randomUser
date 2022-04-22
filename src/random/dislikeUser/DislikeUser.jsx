import React from "react";
import { useParams } from "react-router-dom";

const DislikeUser = () => {
  const { userId } = useParams();
  console.log(userId);
  return (
    <div>
      DISLIKE
      <div>user</div>
    </div>
  );
};

export default DislikeUser;
