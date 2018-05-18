/* eslint-env browser */
import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import ActionList from './ActionList';
import SummaryInfo from './SummaryInfo';
import MapBox from './MapBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    const parsed = queryString.parse(window.location.search).id;
    axios.get(`http://ec2-18-188-81-168.us-east-2.compute.amazonaws.com/api/summary/${parsed}`).then((response) => {
      this.setState({
        data: response.data[0],
      });
    });
  }

  render() {
    const summaryInfo = this.state.data && <SummaryInfo info={this.state.data} />;
    const actionList = this.state.data && <ActionList info={this.state.data} />;
    return (
      <div className="headerContainer">
        <div id="header">
          {summaryInfo}
          {actionList}
        </div>
      </div>
    );
  }
}

export default App;
