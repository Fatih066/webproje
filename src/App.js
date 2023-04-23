import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "./components/topbar/TopBar";
import Home from "./page/home/Home";
import Register from "./page/register/Register";
import Login from "./page/login/Login";
import Settings from "./page/settings/Settings";
import Write from "./page/write/Write";
import Single from "./page/single/Single";
import SinglePost from "./components/singlePost/SinglePost";

function App() {
const userGlobal = true;

  return (
    
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/register" component={userGlobal ? Home : Register}></Route>
        <Route path="/login" component={userGlobal ? Home : Login}></Route>
        <Route path="/write" component={userGlobal ? Write : Register}></Route>
        <Route path="/settings" component={userGlobal ? Settings : Register}></Route>
        <Route path="/singlepost" component={SinglePost}></Route>
        <Route path="/post/:postId" component={Single}></Route>
      </Switch>
    </Router>
  );
}

export default App;
