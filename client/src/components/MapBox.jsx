import React from 'react';

function MapBox(props) {
  return (
    <div className="mapBox">
      <div className="mapBox-map">
        <a href="/map/freshroll-vietnamese-rolls-and-bowls-san-francisco-6" className="biz-map-directions" data-component-bound="true">
        <img id="test" alt="Map" height="135" src="https://maps.googleapis.com/maps/api/staticmap?center=36.1440231017,-115.195895992&zoom=12&size=400x200&markers=color:red%7Clabel:S%7C36.1440231017,-115.195895992&key=AIzaSyARCEIY_6KBaJzAm0snj0l10py-MJKCx00" width="286" />
        </a>
      </div>
      <div className="mapBox-text">
        <ul>
          <li className="mapinfo"><svg className="mapIcon" id="18x18_marker" height="100%" viewBox="0 0 18 18" width="100%"><path d="M14 7A5 5 0 0 0 4 7c0 1.97 1.15 3.658 2.806 4.472h-.17L9 16l2.363-4.528h-.17C12.85 10.658 14 8.97 14 7zM9 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path></svg>{`${props.info.address} ${props.info.city} ${props.info.state}`}</li>
          <li className="mapinfo"><svg className="mapIcon" id="18x18_directions" height="100%" viewBox="0 0 18 18" width="100%"><path d="M16.444 7.556l-5.957-5.958a2.145 2.145 0 0 0-3.034 0L1.598 7.453a2.145 2.145 0 0 0 0 3.034l5.958 5.957a2 2 0 0 0 2.828 0l6.06-6.06a2 2 0 0 0 0-2.828zM9.97 11.47v-2.5h-3v3h-1v-4h4v-2.5l3 3-3 3z"></path></svg><a href="http://www.baidu.com">Get Direction</a></li>
          <li className="mapinfo"><svg className="mapIcon" id="18x18_phone" height="100%" viewBox="0 0 18 18" width="100%"><path d="M15.862 12.526l-2.91-1.68a.442.442 0 0 0-.486.087l-1.58 1.687a.857.857 0 0 1-.52.232s-1.083.03-3.13-1.985c-2.046-2.015-2.054-3.12-2.054-3.12 0-.17.094-.41.21-.533L6.85 5.656a.49.49 0 0 0 .08-.504L5.295 2.14c-.073-.155-.228-.18-.345-.058L2.26 4.924a1.07 1.07 0 0 0-.248.53s-.34 2.927 3.75 6.955c4.093 4.025 6.96 3.59 6.96 3.59.167-.027.4-.148.516-.27l2.684-2.845c.117-.123.09-.285-.062-.36z"></path></svg>{props.info.phoneNumber}</li>
          <li className="mapinfo"><svg className="mapIcon" id="18x18_speech" height="100%" viewBox="0 0 18 18" width="100%"><path d="M2 4v6a2 2 0 0 0 2 2h1v3l4-3h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path></svg><a href="#">Message the business</a></li>
          <li className="mapinfo"><svg className="mapIcon" id="18x18_mobile" height="100%" viewBox="0 0 18 18" width="100%"><path d="M12 17H6a2 2 0 0 1-2-2V2C4 .895 5.078-.016 6 0h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2zm-3-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4-13a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3z"></path></svg><a href="#">Send to your Phone</a></li>
        </ul>
      </div>
    </div>
  );
}
export default MapBox;
