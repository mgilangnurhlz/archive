import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

import '../css/style.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";
import Imglogin from '../images/login.png'

const Login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const dispatch = useDispatch();
        const navigate = useNavigate();
        //? mengambil value dari redux store
        const { user, isError, isSuccess, isLoading, message } = useSelector(
                (state) => state.auth
        );

        useEffect(() => {
                if (user || isSuccess) {
                        navigate("/dashboard");
                }
                dispatch(reset());
        }, [user, isSuccess, dispatch, navigate]);

        const Auth = (e) => {
                e.preventDefault();
                dispatch(LoginUser({ email, password })); //?gunakan fungsi dan ambil data
        };

        return (
                <div>
                        <header>
                                <NavLink to="/" className='logo'>
                                        <span>∆</span>spirasi
                                </NavLink>
                                <input type="checkbox" id="menu-bar" />
                                <label htmlFor="menu-bar"><FontAwesomeIcon icon={faBars} /></label>
                                <nav className="navbar">

                                        <NavLink to="/" className='navi'>
                                                Kembali
                                        </NavLink>
                                </nav>

                        </header>
                        <section className="login">
                                <div className="image">
                                        <img src={Imglogin} alt="" />
                                </div>

                                <form onSubmit={Auth} className="box">
                                        {isError && <p className="has-text-centered">{message}</p>}
                                        <h1 className="heading">Masuk</h1>
                                        <div className="inputBox">
                                                <input
                                                        type="text"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="Masukkan Email"
                                                />

                                        </div>
                                        <div className="inputBox">


                                                <input
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        placeholder="Masukkan password"
                                                />

                                        </div>
                                        <div className="field mt-5" style={{ display: "flex", justifyContent: "center" }}>
                                                <button
                                                        style={{ width: "70%" }}
                                                        type="submit"
                                                        className="btn"
                                                >
                                                        {isLoading ? "Loading..." : "Login"}
                                                </button>
                                        </div>
                                </form>

                        </section>



                        <Footer />

                </div>







        );
};

export default Login;