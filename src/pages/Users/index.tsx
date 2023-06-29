import React from "react";
import { Link } from "react-router-dom";
import UsersTable from "./components/UsersTable";
import {
  StyledTypography,
  StyledUserWrapper,
  StyledNewUserButton,
  StyledContentWrapper
} from "./styles";

const Users = () => {
  return (
    <StyledContentWrapper>
      <StyledUserWrapper>
        <StyledTypography>All users</StyledTypography>
        <StyledNewUserButton type="primary">
          <Link to="/user">New user</Link>
        </StyledNewUserButton>
      </StyledUserWrapper>
      <UsersTable />
    </StyledContentWrapper>
  );
};

export default Users;
