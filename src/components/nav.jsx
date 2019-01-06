import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark">
        <div className="container">
          <a href="" className="navbar-brand">
            The Leaderboard
          </a>
          <div className="navbar-nav">
            <a
              href="https://github.com/ggarnhart/EC-Leaderboard"
              className="nav-item nav-link"
              target="_blank"
            >
              <h2>
                <i className="fab fa-github" />
              </h2>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
