import React, { Component } from "react";
import Tabletop from "tabletop";
import "./styles.css";

class Leaderboard extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.data.map(leader => {
            return (
              <div className="col-sm leader">
                <h2>
                  {leader.FirstName} {leader.LastName}
                </h2>
                <img src={leader.Profile} className="profile" />
                <h2>{leader.Points}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    Tabletop.init({
      key: "1Q0k21e1wTL3EYt8ZcKvXhUhl206XNabZarWiWC2yN4w",
      callback: googleData => {
        console.log(googleData);
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  };
}

export default Leaderboard;
