/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MapBox from './components/MapBox';

ReactDOM.render(<MapBox className="mapAndPhotos" />, document.getElementById('Map'));
ReactDOM.render(<App />, document.getElementById('Summary'));
