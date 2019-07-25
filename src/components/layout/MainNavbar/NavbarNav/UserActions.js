import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink, Button
} from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }
  
  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }
  render() 
  {
    return (
      
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
        {this.props.user.profile ? 
          <img
            className="user-avatar rounded-circle mr-2"
            src={`${this.props.user.profile[0].avatar_url}`}
            alt="User Avatar"
            style={{width:'40px', height:'40px'}}
          />
          : null 
        }

         {/* <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={`${this.props.user.profile[0].avatar_url}`}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block"></span>{this.props.user.username}
        </DropdownToggle>
       */}
          <span className="d-none d-md-inline-block">{this.props.user.username}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile-lite">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="user-profile-lite">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Files
          </DropdownItem>
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> <Button outline size="sm" theme="danger" className="mb-2 mr-1" onClick = {()=>this.props.logout(this.props.token)}> Logout</Button>
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
