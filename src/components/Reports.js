import React, { Component } from 'react';

class Reports extends Component {
  render() {
    return (
      <div>
          <h1>Reports</h1>
          <div>Temperature : {this.props.temperature} </div>
          <div>City : {this.props.city} </div>
          <div>Country : {this.props.country} </div>
          <div>Error : {this.props.error} </div>   
      </div>
    );
  }
}

export default Reports;
