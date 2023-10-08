import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css"

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";



const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>
  },
  {
    path:"/about",
    element:<About/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(title);
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>)
