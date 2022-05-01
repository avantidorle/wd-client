import React, {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";
import {findAllUsers, findUserById} from "../../actions/users-action";

const Profiles = () => {
const users = useSelector(state => state.users);
    const dispatch = useDispatch();
   findUserById(dispatch, sessionStorage.getItem("currentUserId")).then(r => {console.log(r)});
  return (
      <>
          <ProfileItem users={users}/>
      </>

  );
}

export default Profiles;