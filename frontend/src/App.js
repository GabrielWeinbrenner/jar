import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./static/Header.js";
import Profile from "./pages/Profile.js";
import Landing from "./pages/Landing.js";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <Landing />} />
                <Route path="/profile/:id" render={() => <Profile />} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
