import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/slices/userSlice";
import { logout } from "../../redux/slices/authSlice";
import { RootState, AppDispatch } from "../../redux/store";
import logo from "../../assets/img/argentBankLogo.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();


  const { firstName, status } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (token) {

      dispatch(fetchUser(token));
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  };

  if (status === "loading") return <p>Loading...</p>;
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Argent Bank logo" />
      <nav className="main-nav">
        <div className="nav-item">
          <i className="fa fa-user-circle fa-2x"></i>
          <span>{firstName}</span>
        </div>
        <div className="nav-item" onClick={handleLogout}>
          <i className="fa fa-sign-out fa-2x"></i>
          <span>Sign Out</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
