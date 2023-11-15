import * as React from "react";
import Navbar from "./assets/Component/Navbar";
import "./App.css";
import Dashboard from "./assets/Component/Dashboard";
import CourseDetails from "./assets/Component/CourseDetails";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CourseListing from "./assets/Component/CourseListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <Navbar/>
    ),
  },
 
  {
    path: "dashboard",
    element: (
      <Dashboard/>
    ),
  },

  {
    path: "details/:id",
    element: (
      <CourseDetails/>
    ),
  },

  {
    path: "list",
    element: (
      <CourseListing/>
    ),
  },

  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
