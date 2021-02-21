import React from "react";
import { NavLink } from "react-router-dom";
// styles:
import { NavbarStyled } from "./Navigation.styled";

/**
 * @description navigation component
 * @returns {JSX} component markup
 */
const Navigation: React.FC = () => {
  return (
    <NavbarStyled>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navigation;