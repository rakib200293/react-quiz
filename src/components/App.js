import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import "../styles/grid-list.css";
import "../styles/quiz.css";
import "../styles/result.css";
import "../styles/style.css";
import Home from "./Home";
import Layout from "./Layout";
import Login from "./Login";
import Quiz from "./pages/Quiz";
import Signup from "./Signup";
import Result from "./pages/Result";


function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/quiz" component={Quiz}/>
                    <Route exact path="/result" component={Result}/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
