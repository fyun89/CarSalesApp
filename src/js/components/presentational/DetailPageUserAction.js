import React from 'react';
import PropTypes from 'prop-types';

const DetailPageUserAction = ({ data, handleFavorite, handleCheckFavorite }) => (
  <div className="content-container justify-content-center">
    <div className="row">
      <div className="col col-xs-6">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => console.log('(demo) Chosen vehicle is: ', data.id)}
        >
        Choose This Vehicle!
        </button>
        &nbsp;
        {
          handleFavorite(data.id)
            ? (
              <button
                type="button"
                className="btn btn-primary markedFavorite"
                onClick={() => handleCheckFavorite(data.id)}
              >
              Marked as Favorite!
              </button>
            )
            : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleCheckFavorite(data.id)}
              >
              Add To Favorite!
              </button>
            )
        }
      </div>
    </div>
  </div>
);

DetailPageUserAction.propTypes = {
  data: PropTypes.shape({ body_style: PropTypes.string }),
  handleFavorite: PropTypes.func.isRequired,
  handleCheckFavorite: PropTypes.func.isRequired,
};

DetailPageUserAction.defaultProps = {
  data: null,
};

export default DetailPageUserAction;
