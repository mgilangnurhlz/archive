import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"


      }}>
        <h2 style={{
          color: "#814096",
          textAlign: "center",
          fontSize: "3rem"

        }}>
          Selamat datang kembali <br /> <span style={{ color: "#F83292" }}> <strong>"{user && user.name}"</strong> </span>
        </h2>
        <div style={{

          textAlign: "center",
          marginTop: "5rem",
          backgroundColor: "	#FFD700",
          border: "2px solid #000",
          borderRadius: "10px"


        }}>
          <h1 style={{
            color: "#000",
            textAlign: "center",
            fontSize: "3rem",
            marginTop: "2rem"

          }}>Peringatan !!!</h1>

          <div style={{
            color: "#000",
            textAlign: "left",
            margin: "2rem 0 2rem 5rem",
            fontSize: "2rem",
            fontWeight: "bold"



          }}>
            <ol>
              <ol>
                <li>Mengemukakan kritik atau saran dengan bahasa yang baik</li>
                <li>Menggunakan kata yang sopan dan santun</li>
                <li>Berikan argumen untuk memperkuat kritik atau saran yang akan Anda ungkapkan</li>
              </ol>
            </ol>


          </div>

        </div>
      </div>


    </div>
  );
};

export default Welcome;