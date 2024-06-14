import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../store/endpoint/UserReducer";

const UpdateComponent = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const situatedUser = users.filter((f) => f.id == id);
  const { name, email } = situatedUser[0];
  const [updateName, setUpdateName] = useState(name);
  const [updateEmail, setUpdateEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: updateName,
        email: updateEmail,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update Users</h3>
        <form onSubmit={handleUpdate}>
          <div className="">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={updateName}
              onChange={(e) => setUpdateName(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={updateEmail}
              onChange={(e) => setUpdateEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark mt-3">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateComponent;
