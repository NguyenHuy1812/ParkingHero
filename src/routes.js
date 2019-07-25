import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout}from "./layouts";
import {SignInLayout , SignUpLayout} from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import SignUp from "./views/SignUp"
import SignIn from "./views/SignIn"
import AllBuildingNearly from "./views/AllBuildingNearly"
import ManageBuilding from "./views/ManageBuilding"

export default [
 
  {
    path: "/",
    exact: true,
  layout: SignInLayout,
    component: () => <Redirect to="/sign-in" />
  },
  {
    path: "/blog-overview",
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
    path: "/parking-slot",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/sign-up",
    layout: SignUpLayout,
    component: SignUp
  },
  {
    path: "/sign-in",
    layout: SignInLayout,
    component: SignIn
  },
  {
    path: "/manage/building",
    layout:  DefaultLayout,
    component: ManageBuilding
  }
];
