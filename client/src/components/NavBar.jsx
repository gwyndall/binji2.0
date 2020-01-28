// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          className="ui teal button"
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </button>
      )}

      {isAuthenticated && (
        <button className="ui red button" onClick={() => logout()}>
          Log out
        </button>
      )}
    </div>
  );
};

export default NavBar;
