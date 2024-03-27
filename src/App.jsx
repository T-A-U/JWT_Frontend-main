import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth";
import Profile from "./pages/profile";
import StorePage from "./pages/store";
import HomePage from "./pages/home";
import OneGame from "./pages/oneGame";
import CreateGame from "./pages/createGame";
import Navbar from "./components/navbar";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";

function App() {
  return (
    <div className="App" style={{backgroundImage: "linear-gradient(to right, #4880EC, #FFFFFF)", height: "800px"}}>
      <Navbar />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/:id" element={<OneGame />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/createGame" element={<CreateGame />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
