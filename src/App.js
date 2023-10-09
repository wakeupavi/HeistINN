import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css"

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
// import { Link } from "react-router-dom";
import ContactUsPage from "./components/ContactPage";
import RestrauMenu from "./components/RestrauMenu";
// import Profile from "./components/ProfileClass";
import Profile from "./components/Profile";



const AppLayout = () => (
  <>
    <Header />
    <Outlet/>
    {/* <Body /> */}
    <Footer />
  </>
);


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/about",
        element:<About/>,
        children:[
          {
            path:"profile",  //parentPath/{path}==>localhost:1234/about/profile
            element:<Profile name={"Avi gupta"}/>
          },
        ]

      },
      {
        path:"/contact",
        element:<ContactUsPage/>
      }, 
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestrauMenu/>,
      }

    ]
  }
  
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(title);
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>)





// The colon (:) is used to specify a placeholder for a dynamic value in the URL. When a user navigates to a URL that matches this route pattern, the actual value that matches :resId will be extracted from the URL and made available as a parameter in your route handler or component. You can access this parameter using the route's props