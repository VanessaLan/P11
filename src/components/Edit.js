import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../slices/userEditSlice";
import { profileUser } from "../slices/userSlice";

const Edit = ({ toggleSave, toggleCancel }) => {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const [userName, setUserName] = useState("");

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const handleEdit = (event) => {
    event.preventDefault();

    toggleSave();
    dispatch(editUser({ token, userName }));
    dispatch(profileUser({ token }));
  };

  return (
    <div className="edit_container">
      <h1 className="edit_title">Edit user info</h1>

      <form className="edit_form" onSubmit={handleEdit}>
        <div className="edit_input_wrapper">
          <label htmlFor="username">User name : </label>
          <input
            type="text"
            id="username"
            // defaultValue={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>

        <div className="edit_input_wrapper">
          <label htmlFor="firstname">First name : </label>
          <input type="text" id="firstname" value={firstName} disabled />
        </div>

        <div className="edit_input_wrapper">
          <label htmlFor="lastname">Last name : </label>
          <input type="text" id="lastname" value={lastName} disabled />
        </div>

        <div className="edit_button_wrapper">
          <button type="submit" className="edit_button">
            Save
          </button>

          <button className="edit_button" onClick={toggleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
