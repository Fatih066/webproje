import './Settings.css'
import SideBar from '../../components/sidebar/Sidebar'
import resim1 from '../../assets/ben.jpeg'
import {Link} from 'react-router-dom'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">
                    <Link className='link' to='/register'>Delete Account</Link>
                </span>
            </div>
            <form  className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={resim1} alt=''></img>
                    <label htmlFor='fileInput'>
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type='file' id='fileInput' style={{display:'none'}}></input>
                </div>
                <label>Username</label>
                <input type='text' placeholder='Fatih'></input>
                <label>Email</label>
                <input type='email' placeholder='fatih@gmail.com'></input>
                <label>Password</label>
                <input type='password' ></input>
                <button className="settingsSubmit">
                    <Link className='link' to='/'>
                    Update
                    </Link>
                </button>
            </form>
        </div>
        <SideBar></SideBar>
    </div>
  )
}
