import React, {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";
import {findAllUsers} from "../../actions/users-action";

const Profiles = () => {
const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {findAllUsers(dispatch)});
  return (
        users && users.map && users.map(users =>
          <ProfileItem key={users._id}
                        users={users}/>)
  );
}

export default Profiles;