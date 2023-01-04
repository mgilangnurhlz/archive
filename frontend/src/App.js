import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/users";
import Aspirasis from "./pages/Aspirasis";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddAspirasi from "./pages/AddAspirasi";
import EditAspirasi from "./pages/EditAspirasi";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/aspirasis" element={<Aspirasis />} />
          <Route path="/aspirasis/add" element={<AddAspirasi />} />
          <Route path="/aspirasis/edit/:id" element={<EditAspirasi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
