import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar2/Navbar2";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Profile from "./components/Profile";
import Signup from "./components/Signup/Signup";
import LoginPage from "./components/LoginPage/LoginPage";
function layout(element) {
  return (
    <>
      <Navbar />
      <Navbar2 />
      {element}
    </>
  );
}
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={layout(<Home />)}>
          </Route>
          <Route path="/cart" element={layout(<Cart />)}></Route>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
