import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/endpoint/UserReducer";
import { useNavigate } from "react-router-dom";

const CreateComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New Users</h3>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateComponent;
