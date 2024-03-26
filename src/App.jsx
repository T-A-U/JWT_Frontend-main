import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth";
import Profile from "./pages/profile";
import StorePage from "./pages/store";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
