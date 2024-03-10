import React from "react";

const ProfilePicture = () => {

  const imageUrl = './src/assets/profile_pic.jpg';
  const handleClick=(e)=>{
    e.target.style.display = "none";
  }


  return (
    <>
      <img src={imageUrl}  width={350} onClick={(e)=>handleClick(e)} />
    </>
  );
};

export default ProfilePicture;
