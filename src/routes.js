import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, SignInLayout , IndexLayout}from "./layouts";


// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Index from "./views/Index"
import SignIn from "./views/SignIn"
import AllBuildingNearly from "./views/AllBuildingNearly"
import ManageBuilding from "./views/ManageBuilding"

const id = window.location.pathname.split("/").slice(-1)[0].split("-")[2]
export default [
 
  {
    path: "/",
    exact: true,
    layout: IndexLayout,
    component: Index
  },
  {
    path: "/building-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-parking",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/building",
    layout: DefaultLayout,
    component: AllBuildingNearly
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: `/parking-slot`,  
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: `/parking-slot/${id}`,  
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/sign-in",
    layout: SignInLayout,
    component: SignIn
  },
  {
    path: "/manage-building",
    layout:  DefaultLayout,
    component: ManageBuilding
  }
];
