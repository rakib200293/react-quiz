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

function App() {
    return (
        <div className="App">
            <Layout>
                {/* <Home /> */}
                {/* <Signup /> */}
                {/* <Login /> */}
                <Quiz />
            </Layout>
        </div>
    );
}

export default App;
