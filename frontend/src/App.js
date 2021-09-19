import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./static/Header.js";
import Profile from "./pages/Profile.js";
import Landing from "./pages/Landing.js";
import Community from "./pages/Community.js";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <Landing />} />
                <Route
                    path="/community/:id"
                    render={(props) => <Community {...props} />}
                />
                <Route
                    path="/profile/:id"
                    render={(props) => <Profile {...props} />}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
