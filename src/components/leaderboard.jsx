import React, { Component } from "react";
import Tabletop from "tabletop";
import "./styles.css";

class Leaderboard extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className="container leaderboard">
        <h1 className="text-center">Leaderboard</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(leader => {
              return (
                <tr>
                  <td>
                    <span className="heavy">{leader.FirstName} </span>
                    <span className="light">{leader.LastName}</span>
                  </td>
                  <td>
                    <span className="heavy">{leader.Points} </span>
                    <span className="light">Points</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount = () => {
    Tabletop.init({
      key: "1E-Hxa9pgcvaQXm1oxC13H5TTrgCy8IcZHvXxODIXe9Y",
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
