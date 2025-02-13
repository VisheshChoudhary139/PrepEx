import "./App.css";
import React, { Component } from "react";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import MasterQuote from "./components/MasterQuote";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Progress from "./components/Progress";
import Aptitude from "./components/Aptitude";
import English from "./components/English";
import Programming from "./components/Programming";
import Practice from "./components/Practice"; // Import the Practice component

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "login", // Default page
    };
  }

  onNavigate = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div>
        <Navbar onNavigate={this.onNavigate} />
        {currentPage === "login" && <Login onNavigate={this.onNavigate} />}
        {currentPage === "signup" && <Signup onNavigate={this.onNavigate} />}
        {currentPage === "home" && <Home onNavigate={this.onNavigate} />}
        {currentPage === "cards" && <Cards onNavigate={this.onNavigate} />}
        {currentPage === "progress" && <Progress onNavigate={this.onNavigate} />}
        {currentPage === "masterquote" && <MasterQuote onNavigate={this.onNavigate} />}
        {currentPage === "aptitude" && <Aptitude onNavigate={this.onNavigate} />}
        {currentPage === "english" && <English onNavigate={this.onNavigate} />}
        {currentPage === "programming" && <Programming onNavigate={this.onNavigate} />}
        {currentPage === "practice" && <Practice onNavigate={this.onNavigate} />} {/* Added Practice Component */}
        <Footer />
      </div>
    );
  }
}