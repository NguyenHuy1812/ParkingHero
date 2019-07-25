import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";

export default ({user, logout, token}) => (
  <Nav navbar className="border-left flex-row">
    <Notifications />
    <UserActions user= {user} logout = {logout} token = {token}/>
  </Nav>
);
