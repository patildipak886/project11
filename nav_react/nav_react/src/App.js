import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./pages/cssfooter.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import ViewComplaintList from "./pages/viewcomplaint";
import UserHomePage from "./pages/userhomepage";
import Forgot from "./pages/forgot.js";
import Complaint from "./pages/complaint";
import EnterOtp from "./pages/enterotp";
import ResetPassword from "./pages/resetpassword";
import ViewAdminComplaintList from "./pages/viewadmincomplaints";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/enterotp" component={EnterOtp} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Route path="/user/homepage" component={UserHomePage} />
        <Route path="/user/viewcomplaints" component={ViewComplaintList} />
        <Route path="/user/lodgecomplaint" component={Complaint} />
        <Route
          path="/admin/viewcomplaints"
          component={ViewAdminComplaintList}
        />
      </Switch>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
