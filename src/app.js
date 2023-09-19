import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContex";
import { PrivateRoutes } from "./utils/PrivateRouter";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import  Blog  from "./components/Blog";
import { Users } from "./components/Users";
import Work from "./components/Work";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Schooling from "./components/Schooling";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />

        <div className="container p-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/news" component={Blog} />
            <Route path="/mywork" component={Work} />
            <Route path="/schooling" component={Schooling} />
            <Route element={<PrivateRoutes />}>
              <Route path="/profile" component={Profile} />
              <Route path="/guestbook" component={Users} />
            </Route>
          </Switch>
        </div>

        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
