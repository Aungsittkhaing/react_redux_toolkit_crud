import React, { useState } from "react";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../store/endpoint/UserReducer";

const HomeComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const handleDelete = (id) => {
    const userConfirm = confirm("Are you sure to remove?");
    if (userConfirm) {
      dispatch(deleteUser({ id: id }));
    }
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-2">
        <h2 className="text-black-50">CRUD App with Redux Toolkit</h2>
        <Link to={"/create"}>
          <h3 className="btn btn-dark">
            <FaPlus />
          </h3>
        </Link>
      </div>
      {users.length == 0 ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <h1 className="text-black-50">There is no lists</h1>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div className="d-flex">
                    <Link to={`/edit/${user.id}`}>
                      <h4 role="button" className="text-dark">
                        <HiPencilSquare />
                      </h4>
                    </Link>
                    <h4
                      role="button"
                      onClick={() => handleDelete(user.id)}
                      className="button ms-2"
                    >
                      <FaRegTrashAlt />
                    </h4>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HomeComponent;
