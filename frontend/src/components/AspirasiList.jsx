import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../css/style.css';
import '../css/tabel.css';

const AspirasiList = () => {
  const [aspirasis, setAspirasis] = useState([]);

  useEffect(() => {
    getAspirasis();
  }, []);

  const getAspirasis = async () => {
    const response = await axios.get("http://localhost:5000/aspirasis");
    setAspirasis(response.data);
  };

  const deleteAspirasi = async (aspirasiId) => {
    await axios.delete(`http://localhost:5000/aspirasi/${aspirasiId}`);
    getAspirasis();
  };

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"


      }}>
        <div>
          <h2 style={{ fontSize: "3rem", fontStyle: "bold" }}>"Daftar Aspirasi dan Keluhan Masyarakat"</h2>
        </div>

        <div>
          <Link to="/aspirasis/add" className="btntabel">
            Add New
          </Link>
        </div>
        <table className="tabel">
          <tr>
            <th>No</th>
            <th>Jenis</th>
            <th>Deskripsi</th>
            <th>Status</th>
            <th>Pelapor</th>
            <th>Aksi</th>
          </tr>


          {aspirasis.map((aspirasi, index) => (
            <tr key={aspirasi.uuid}>
              <td>{index + 1}</td>
              <td>{aspirasi.name}</td>
              <td>{aspirasi.deskripsi}</td>
              <td>{aspirasi.status}</td>
              <td>{aspirasi.user.name}</td>
              <td>
                <Link
                  to={`/aspirasis/edit/${aspirasi.uuid}`}
                  className="btnedit"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteAspirasi(aspirasi.uuid)}
                  className="btndelete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>

      </div>

    </div>
  );
};

export default AspirasiList;