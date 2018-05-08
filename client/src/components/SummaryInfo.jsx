import React from 'react';
import PropTypes from 'prop-types';

const claimInfo = 'This business has been claimed by the owner or a representative.';

function SummaryInfo(props) {
  return (
    <div className="header-left">
      <div className="titleClass">
        <span className="titleLine" id="restaurantName">{ props.info.name }</span>
        <span data-toggle="tooltip" title={claimInfo} className="titleLine" id="restaurantClaimed"><svg id="checkmark_badged" height="100%" viewBox="0 0 18 18" width="100%"><path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm3.96 6.28l-4.808 4.807-3.112-3.11a.8.8 0 1 1 1.13-1.132l1.982 1.98 3.677-3.677a.8.8 0 1 1 1.13 1.13z" /></svg>Claimed</span>
      </div>
      <div className="ratingClass">
        <img className="reviewLine" id="restaurantStars" src={`https://s3.amazonaws.com/hrsf93welpusers/${props.info.stars.toString().replace('.','_')}.png`} alt={props.info.stars} />
        <span className="reviewLine" id="restaurantReviewCount">{ props.info.reviewCount } reviews</span>
        <button className="reviewLine" id="restaurantDetail"><svg id="histogram" height="100%" viewBox="0 0 14 14" width="100%"><path d="M9 11V5h2v6H9zM6 3h2v8H6V3zM3 7h2v4H3V7z" /></svg>Detail</button>
      </div>
      <div className="categoryClass">
        <span id="bullet">•</span>
        {props.info.categories.slice(0, 3).map(category => <a key={category} className="categories" href="#">{category}</a>)}
        <button id="restaurantEdit"><svg id="pencil" height="100%" viewBox="0 0 14 14" width="100%"><path d="M12.95 3.05c0-.512-.195-1.023-.586-1.414a1.996 1.996 0 0 0-2.83 0L8.122 3.05 2.465 8.707 1.05 12.95l4.243-1.414L10.95 5.88l1.414-1.416c.39-.39.586-.902.586-1.414zm-8.197 7.61l-2.122.71.71-2.123 5.49-5.49 1.415 1.415-5.49 5.49z" /></svg>Edit</button>
      </div>
    </div>
  );
}

SummaryInfo.propTypes = {
  info: PropTypes.shape({
    businessId: PropTypes.string,
    name: PropTypes.string,
    stars: PropTypes.number,
    reviewCount: PropTypes.number,
  }),
  attributes: PropTypes.shape({
    restaurantsPriceRange2: PropTypes.number,
  }),
}.isRequired;

export default SummaryInfo;
