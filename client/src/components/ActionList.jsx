import React from 'react';
import PropTypes from 'prop-types';

function ActionList(props) {
  return (
    <div className="actionClass">
      <span>
        <a className="actionElements" id="writeReview" href={`https://www.yelp.com/writeareview/biz/${props.info.businessId}?return_url=%2Fbiz%2FSn88jc5tEJH-D4qxqZn8PQ&source=biz_details_war_button`}><svg id="star" height="100%" viewBox="0 0 24 24" ><path d="M12 1.5l2.61 6.727 6.89.53-5.278 4.688 1.65 7.055L12 16.67 6.13 20.5l1.648-7.055L2.5 8.757l6.89-.53L12 1.5z" /></svg>Write A Review</a>
      </span>
      <span className="actionList">
        <a className="actionElements" id="addphoto" href={`https://www.yelp.com/biz_user_photos/${props.info.businessId}/upload`}><svg id="photo" height="100%" viewBox="0 0 18 18" width="100%"><path d="M15 15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zM9 4.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zM11 10h-1v1a1 1 0 0 1-2 0v-1H7a1 1 0 0 1 0-2h1V7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z" /></svg>Add Photo</a>
        <a className="actionElements" id="sharing" href={`https://www.yelp.com/biz_share/${props.info.businessId}`}><svg id="share" height="100%" viewBox="0 0 18 18" width="100%"><path d="M17.714 6.43L13 10.356v-3.03c-1 0-5.097 1.47-6.286 3.62.274-3.08 4.286-5.5 6.286-5.5V2.5l4.714 3.93zM3 4v10h11v-2.5l1-1V15H2V3h8.5l-1 1H3z" /></svg>Sharing</a>
        <a className="actionElements" id="addToBookMark" href={`https://www.yelp.com/bookmark/add_biz?biz_id=${props.info.businessId}&return_url=%2Fbiz%2F1OGEnnsDdrJSziy9VwCRnA`}><svg id="bookmark" height="100%" viewBox="0 0 18 18" width="100%"><path d="M14 2H4v14l5-4 5 4V2zm-3.13 7.957L8.978 8.794 7.148 10 7.5 7.926 6 6.458l2.074-.303L8.977 4l.948 2.155L12 6.458l-1.5 1.468.37 2.03z" /></svg>Bookmark</a>
      </span>
    </div>
  );
}

ActionList.propTypes = {
  info: PropTypes = {
    businessId: PropTypes.string,
  },
}.isRequired;

export default ActionList;
