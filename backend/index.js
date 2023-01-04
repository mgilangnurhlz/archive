import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import AspirasiRoute from "./routes/AspirasiRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store); //? menyimpan session user

const store = new sessionStore({
  db: db,
});

// (async () => {
//   await db.sync();
// })();

//? session untuk login
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true, //? akses untuk frontend
    origin: "http://localhost:3000", //? domain yang diijinka mengakses api
  })
);

app.use(express.json()); //? menerima data format json
app.use(UserRoute);
app.use(AspirasiRoute);
app.use(AuthRoute);

//store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
