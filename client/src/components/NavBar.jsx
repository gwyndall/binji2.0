// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav>
      <h1>Binji</h1>

      {!isAuthenticated && (
        <button
          className="ui right floated white button"
          onClick={() => loginWithRedirect({})}
          id="loginButton"
        >
          <i className="facebook icon"></i>
          Log in with Facebook
        </button>
      )}

      {isAuthenticated && (
        <button
          className="ui right floated red button"
          onClick={() => logout()}
          id="logoutButton"
        >
          Log out
        </button>
      )}

      <h3>This is regular text</h3>
    </nav>
  );
};

export default NavBar;
