import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import '../css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <header>
        <NavLink to="/dashboard" className='logo'>
          <span>∆</span>spirasi
        </NavLink>
        <input type="checkbox" id="menu-bar" />
        <label htmlFor="menu-bar"><FontAwesomeIcon icon={faBars} /></label>
        <nav className="navbar">

          <NavLink to={"/dashboard"} className='navi'>
            Dashboard
          </NavLink>
          <NavLink to={"/aspirasis"} className='navi'>
            Aspirasi
          </NavLink>
          {user && user.role === "admin" && (

            <NavLink to={"/users"} className='navi'>
              Pengguna
            </NavLink>

          )}

          <button onClick={logout} className="navi" style={{ background: "none" }}>
            Keluar
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;