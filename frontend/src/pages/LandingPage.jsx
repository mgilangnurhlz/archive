import React from 'react';
import '../css/style.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';


function LandingPage() {
        return (
                <div>
                        <header>
                                <NavLink to="/" className='logo'>
                                        <span>∆</span>spirasi
                                </NavLink>
                                <input type="checkbox" id="menu-bar" />
                                <label htmlFor="menu-bar"><FontAwesomeIcon icon={faBars} /></label>
                                <nav className="navbar">
                                        <a className='navi' href="#">Beranda</a>
                                        <a className='navi' href="#tentang">Tentang</a>
                                        <NavLink to="/login" className='navi'>
                                                Masuk
                                        </NavLink>
                                </nav>

                        </header>
                        <section className="home" id="home">
                                <div className="content">
                                        <h3 style={{ color: "#814096" }}>Kami <span>Mendengar</span></h3>
                                        <p>Selamat datang di sistem informasi Aspirasi online yang dibuat berbasis web. <br></br>Sehingga bisa diakses dari mana saja dan kapan saja.</p>
                                        <NavLink to="/login" className='btn'>
                                                Suarakan Aspirasimu
                                        </NavLink>

                                </div>
                                <div class="image">

                                </div>


                        </section>
                        <div id='tentang' className="catatan">

                                <h3>Cara menggunakan aplikasi</h3>
                                <p>Pastikan kamu sudah memiliki akun dan terdaftar di sistem ini, Jika belum, silahkan hubungi
                                        admin atau pergi ke balai kelurahan terdekat.</p>

                        </div>

                        <div className="quickcount" id="quickcount" style={{ marginTop: "11rem", marginBottom: "8rem" }}>
                                <h1 className="heading"> Fitur </h1>
                                <div className="box-container">

                                        <div className="box1">

                                                <div className="user">

                                                        <h3>Laporan</h3>
                                                        <h4>Laporkan keluhan dan keadaan disekitar</h4>

                                                </div>
                                        </div>
                                        <div className="box1">

                                                <div className="user">

                                                        <h3>Kritik</h3>
                                                        <h4>Menilai kinerja balai pemerintahan</h4>

                                                </div>
                                        </div>
                                        <div className="box1">

                                                <div className="user">

                                                        <h3>Saran</h3>
                                                        <h4>Mengirim masukkan yang membangun</h4>

                                                </div>
                                        </div>

                                </div>
                        </div>
                        <Footer />
                </div>
        )
}

export default LandingPage