import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../css/form.css';

const FormAddAspirasi = () => {
  const [name, setName] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveAspirasi = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/aspirasi", {
        name: name,
        deskripsi: deskripsi,
        status: "Menunggu Konfirmasi",
      });
      navigate("/aspirasis");
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
        flexDirection: "column",
        marginTop: "4rem",
        alignItems: "center"
      }}>
        <form onSubmit={saveAspirasi}>
          <h1 style={{ fontSize: "4rem", color: "#F83292" }}>Form Tambah Aspirasi</h1>
          <p className="has-text-centered">{msg}</p>
          <div className="inputna">
            <label>Jenis</label>
            <select
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <option value="tidak memilih">--pilih--</option>
              <option value="Laporan">Laporan</option>
              <option value="Kritik">Kritik</option>
              <option value="Saran">Saran</option>
            </select>
          </div>

          <div className="inputna">
            <label>Deskripsi</label>
            <input
              className="input"
              type="text"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Deskripsi"
            />

          </div>

          <div className="inputna">

            <button type="submit" className="btnn" >
              Save
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default FormAddAspirasi;