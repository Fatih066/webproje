import './Header.css'
import resim1 from  '../../assets/historyandeffects.jpeg';

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>History & Effects</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={resim1} alt=''></img>
    </div>
  )
}
