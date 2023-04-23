import "./Sidebar.css";
import resim1 from  '../../assets/ben.jpeg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={resim1} alt="" />
        <p>
          
Hello, I'm Fatih. I am a person who likes to research historical events, examines the effects of these events on history and likes to share my reviews.
        </p>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sideBarList">
            <li className="sidebarListItem">History</li>
            <li className="sidebarListItem">War</li>
            <li className="sidebarListItem">Psychology</li>
            <li className="sidebarListItem">Strategy</li>
            <li className="sidebarListItem">Army</li>
            <li className="sidebarListItem">Military</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i  className="sidebarIcon fa-brands fa-square-facebook"></i> 
        <i  className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i  className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i  className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>

        </div>
      </div>
    </div>
  );
}
