import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "4rem",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <form onSubmit={saveUser}>
          <h1 style={{ fontSize: "4rem", color: "#F83292" }}>Form Tambah Pengguna</h1>
          <p >{msg}</p>
          <div className="inputna">
            <label>Name</label>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>

          <div className="inputna">
            <label>Email</label>

            <input
              type="text"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className="inputna">
            <label>Password</label>

            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
            />

          </div>


          <div className="inputna">
            <label >Confirm Password</label>

            <input
              type="password"
              className="input"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              placeholder="******"
            />

          </div>
          <div className="inputna">
            <label >Role</label>


            <select
              className="input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>


          </div>
          <div className="inputna">

            <button type="submit" className="btnn">
              Save
            </button>

          </div>
        </form>
      </div>
    </div>

  );
};

export default FormAddUser;