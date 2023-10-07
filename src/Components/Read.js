import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers =  () => {
     axios.get("https://64ba603e5e0670a501d611a1.mockapi.io/users")
     .then((res)=>   setUsers(res.data))
     .catch(err => console.log(err))
  }



  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <Link to = '/create'><button className="btn btn-success">Add User</button></Link>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                

                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;
