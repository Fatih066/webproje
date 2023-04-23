import "./Topbar.css";
import resim1 from "../../assets/ben.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function TopBar() {
  const user = true;
  return (
    <nav>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem">
              <Link className='link' to='/register'>{ user && "LOGOUT"}</Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link className="link" to="/settings">
              <img className="topImg" src={resim1} alt=""></img>
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <i
            className="topSearch fa-solid fa-magnifying-glass"
            color="#000000"
          ></i>
        </div>
      </div>
    </nav>
  );
}
