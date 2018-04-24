import React from 'react';
import axios from 'axios';
import ActionList from './ActionList';
import SummaryInfo from './SummaryInfo';
import MapBox from './MapBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    axios.get('/api/summaryInfos/8').then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }

  render() {
    return (
      <div className="headerContainer">
        <div id="header">
          <SummaryInfo info={this.state.data} />
          <ActionList info={this.state.data} />
        </div>
        <div className="mapAndPhotos">
          <MapBox info={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
