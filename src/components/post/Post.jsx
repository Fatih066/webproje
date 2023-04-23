import "./Post.css";
import resim1 from '../../assets/ww1.jpeg'
import {Link} from 'react-router-dom'


export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={resim1} alt="" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">History</span>
          <span className="postCategory">War</span>
        </div>
        <span className="postTitle">
          <Link className='link' to='/singlepost'>World War I or the First World War</Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      World War I or the First World War (28 July 1914 – 11 November 1918), often abbreviated as WWI, was one of the deadliest global conflicts in history. It was fought between two coalitions, the Allies (primarily France, the United Kingdom, Russia, Italy, Japan, and the United States) and the Central Powers (led by Germany, Austria-Hungary, and the Ottoman Empire). Fighting occurred throughout Europe, the Middle East, Africa, the Pacific, and parts of Asia. An estimated 9 million soldiers were killed in combat, plus another 23 million wounded, while 5 million civilians died as a result of military action, hunger, and disease. Millions more died as a result of genocide, while the 1918 Spanish flu pandemic was exacerbated by the movement of combatants during the war.
      </p>
    </div>
  );
}
