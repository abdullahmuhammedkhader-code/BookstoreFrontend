import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./user/pages/Home";
import Contact from "./user/pages/Contact";
import Books from "./user/pages/Books";
import Profile from "./user/pages/Profile";
import View from "./user/pages/View";

import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminResources from "./admin/pages/AdminResources";
import AdminSettings from "./admin/pages/AdminSettings";

import Auth from "./pages/Auth";
import Pnf from "./pages/Pnf";

import Preloader from "./components/Perloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  return (
    <>
      <Routes>
        <Route path="/" element={isLoading ? <Preloader /> : <Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth  insideRegister/>} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/books/:id" element={<View />} />
        <Route
          path="/admin"
          element={isLoading ? <Preloader /> : <AdminDashboard />}
        />
        <Route path="/admin/resources" element={<AdminResources />} />
        <Route path="/admin/setting" element={<AdminSettings />} />
        <Route path="/*" element={<Pnf />} />
      </Routes>
    </>
  );
}

export default App;
