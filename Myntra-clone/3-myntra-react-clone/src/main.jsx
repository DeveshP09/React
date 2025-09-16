import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.jsx";
import Bag from "./components/Bag.jsx";
import Home from "./routes/Home.jsx";
import {Provider} from "react-redux";
import myntraStore from "./store/index.js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //For default App component will load with Header and footer
    children: [
      { path: "/", element: <Home /> }, //for "/" in url Home component will load
      { path: "/bag", element: <Bag /> }, //for "/bag" in url bag component will load
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
