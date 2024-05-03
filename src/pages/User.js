import React, { useEffect, useState } from "react";
import Transaction from "../components/Transaction";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../slices/userSlice";
import Edit from "../components/Edit";

const User = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const userName = useSelector((state) => state.user.userName);
  const [EditForm, setEditForm] = useState(false);

  useEffect(() => {
    dispatch(profileUser({ token }));
  }, [token, dispatch]);

  const toggleEdit = () => {
    if (token) {
      setEditForm(!EditForm);
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        {EditForm ? (
          <Edit toggleSave={toggleEdit} toggleCancel={toggleEdit} />
        ) : (
          <div>
            <h1>
              Welcome back
              <br />
              {userName}
            </h1>

            <button className="edit-button" onClick={toggleEdit}>
              Edit Name
            </button>
          </div>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>

      <Transaction
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />

      <Transaction
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />

      <Transaction
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
};

export default User;
