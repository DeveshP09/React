import { Outlet } from "react-router-dom";
import "../index.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FetchItems from "../components/FetchItems.jsx";

function App() {
  return (
    <>
      <Header />
      <FetchItems/>
      <Outlet />         
      <Footer />
    </>
  );
}

//Outlet load the component based on the routes

export default App;
