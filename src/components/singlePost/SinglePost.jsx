import "./SinglePost.css";
import resim1 from "../../assets/ww1.jpeg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={resim1} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          World War I or the First World War
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-sharp fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Fatih</b>
          </span>
          <span className="singlePostDate"> 1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          {" "}
          World War I or the First World War (28 July 1914 – 11 November 1918),
          often abbreviated as WWI, was one of the deadliest global conflicts in
          history. It was fought between two coalitions, the Allies (primarily
          France, the United Kingdom, Russia, Italy, Japan, and the United
          States) and the Central Powers (led by Germany, Austria-Hungary, and
          the Ottoman Empire). Fighting occurred throughout Europe, the Middle
          East, Africa, the Pacific, and parts of Asia. An estimated 9 million
          soldiers were killed in combat, plus another 23 million wounded, while
          5 million civilians died as a result of military action, hunger, and
          disease. Millions more died as a result of genocide, while the 1918
          Spanish flu pandemic was exacerbated by the movement of combatants
          during the war. The first decade of the 20th century saw increasing
          diplomatic tension between the European great powers. This reached
          breaking point on 28 June 1914, when a Bosnian Serb named Gavrilo
          Princip assassinated Archduke Franz Ferdinand, heir to the
          Austro-Hungarian throne. Austria-Hungary held Serbia responsible, and
          declared war on 28 July. Russia came to Serbia's defence, and by 4
          August, defensive alliances had drawn in Germany, France, and Britain.
          German strategy in 1914 was to first defeat France, then attack
          Russia. However, this failed, and by the end of 1914, the Western
          Front consisted of a continuous line of trenches stretching from the
          English Channel to Switzerland. The Eastern Front was more fluid, but
          neither side could gain a decisive advantage, despite a series of
          costly offensives. Attempts by both sides to bypass the stalemate
          caused fighting to expand into the Middle East, the Alps, the Balkans,
          and overseas colonies, bringing Bulgaria, Romania, Greece, and others
          into the war.
        </p>
      </div>
    </div>
  );
}
