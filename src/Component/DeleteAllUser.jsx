import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Store/Actions/index";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const clearAllData = () => {
    dispatch(deleteUser());
  }
  return <div><button onClick={clearAllData}>DeleteAllUser</button></div>;
};