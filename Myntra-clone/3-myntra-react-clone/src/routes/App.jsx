import { Outlet } from "react-router-dom";
import "../index.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FetchItems from "../components/FetchItems.jsx";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet />} 
      <Outlet />         
      <Footer />
    </>
  );
}

//Outlet load the component based on the routes

export default App;
