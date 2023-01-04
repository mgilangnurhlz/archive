import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const FormEditAspirasi = () => {


  const [name, setName] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getAspirasiById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/aspirasi/${id}`
        );
        setName(response.data.name);
        setDeskripsi(response.data.deskripsi);
        setStatus(response.data.status);

      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getAspirasiById();
  }, [id]);

  const updateAspirasi = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/aspirasi/${id}`, {
        name: name,
        deskripsi: deskripsi,
        status: status,
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
        marginTop: "4rem",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <form onSubmit={updateAspirasi} >
          <h1 style={{ fontSize: "4rem", color: "#F83292", marginLeft: "3.5rem" }}>Form Edit Aspirasi</h1>
          <p className="has-text-centered">{msg}</p>
          <div className="inputna">
            <label>Jenis</label>

            <select
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <option value="Laporan">Laporan</option>
              <option value="Kritik">Kritik</option>
              <option value="Saran">Saran</option>
            </select>

          </div>
          <div className="inputna">
            <label className="label">Deskripsi</label>

            <input
              type="text"
              className="input"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Price"
            />

          </div>
          {user && user.role === "admin" && (
            <div className="inputna">
              <label className="label">Status</label>

              <select
                className="input"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Menunggu Konfirmasi">Menunggu Konfirmasi</option>
                <option value="Telah Dikonfirmasi">Telah Dikonfirmasi</option>
                <option value="Selesai">Selesai</option>
              </select>

            </div>
          )}

          <div className="inputna">

            <button type="submit" className="btnn">
              Update
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditAspirasi;