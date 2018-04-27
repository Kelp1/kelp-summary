/* eslint-env browser */
import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import GOOGLE_MAPS_API_KEY from '../../../server/config.js';

class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    const parsed = queryString.parse(window.location.search).id;
    axios.get(`http://54.183.21.117/api/summary/${parsed}`).then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }

  render() {
    if (!this.state.data) { return ''; }
    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${this.state.data.latitude},${this.state.data.longitude}&zoom=12&size=238x135&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C${this.state.data.latitude},${this.state.data.longitude}&key=${GOOGLE_MAPS_API_KEY}`;
    return (
      <div className="mapBox">
        <div className="mapBox-map">
          <a href="#" className="biz-map-directions" data-component-bound="true">
            <img id="test" alt="Map" height="135" src={mapUrl} width="286" />
          </a>
        </div>
        <div className="mapBox-text">
          <ul>
            <li className="mapinfo"><svg className="mapIcon" id="18x18_marker" height="100%" viewBox="0 0 18 18" width="100%"><path d="M14 7A5 5 0 0 0 4 7c0 1.97 1.15 3.658 2.806 4.472h-.17L9 16l2.363-4.528h-.17C12.85 10.658 14 8.97 14 7zM9 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></svg>{`${this.state.data.address} ${this.state.data.city} ${this.state.data.state}`}</li>
            <li className="mapinfo"><svg className="mapIcon" id="18x18_directions" height="100%" viewBox="0 0 18 18" width="100%"><path d="M16.444 7.556l-5.957-5.958a2.145 2.145 0 0 0-3.034 0L1.598 7.453a2.145 2.145 0 0 0 0 3.034l5.958 5.957a2 2 0 0 0 2.828 0l6.06-6.06a2 2 0 0 0 0-2.828zM9.97 11.47v-2.5h-3v3h-1v-4h4v-2.5l3 3-3 3z" /></svg><a href="#">Get Directions</a></li>
            <li className="mapinfo"><svg className="mapIcon" id="18x18_speech" height="100%" viewBox="0 0 18 18" width="100%"><path d="M2 4v6a2 2 0 0 0 2 2h1v3l4-3h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" /></svg><a href="#">Message the business</a></li>
            <li className="mapinfo"><svg className="mapIcon" id="18x18_mobile" height="100%" viewBox="0 0 18 18" width="100%"><path d="M12 17H6a2 2 0 0 1-2-2V2C4 .895 5.078-.016 6 0h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2zm-3-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4-13a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3z" /></svg><a href="#">Send to your Phone</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MapBox;
