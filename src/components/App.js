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
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PublicRoute exact path="/signup" component={Signup} />
                        <PublicRoute exact path="/login" component={Login} />
                        <PrivateRoute path="/quiz" component={Quiz} />
                        <PrivateRoute path="/result" component={Result} />
                    </Switch>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
