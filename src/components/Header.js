import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/argentBankLogo.webp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/logSlice";
import { userLogout } from "../slices/userSlice";

const Header = () => {
  const token = localStorage.getItem("token");
  const userName = useSelector((state) => state.user.userName);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleClick = (event) => {
    event.preventDefault();

    localStorage.removeItem("token");
    
    dispatch(logout());
    dispatch(userLogout());

    navigate("/");
  };


  return (
    <nav className="main-nav">
      <NavLink to={"/"} className="main-nav-logo">
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        ></img>
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      {!token ? (
        <NavLink to={"/signin"} className="main-nav-item">
          <span>
            <i className="fa fa-user-circle"></i>
            <span> Sign In </span>
          </span>
        </NavLink>
      ) : (
        <div className="main_nav_user_connected">
            
          <NavLink to={"/user"} className="main-nav-item">
            <span>
              <i className="fa fa-user-circle"></i>
              <span>{userName}</span>
            </span>
          </NavLink>


          <NavLink className="main-nav-item">
            <span>
              <i className="fa fa-sign-out"></i>
              <span onClick={handleClick}>Sign Out</span>
            </span>
          </NavLink>
          
        </div>
      )}
    </nav>
  );
};

export default Header;
