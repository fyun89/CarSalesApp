import React from 'react';

const DetailPageCarousel = ({ data }) => {
  if (!data) {
    return (
      <div>Loading</div>
    );
  }
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
        {data.map((elem,i) => {
          if (i > 0) {
            return <li data-target="#carouselExampleIndicators" data-slide-to={i} />
          }
        })}
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={data[0]} alt="First slide" />
        </div>
        {data.map((elem, i) => {
          if (i > 0) {
            return (
              <div className="carousel-item">
                <img className="d-block w-100" src={elem} alt="First slide" />
              </div>
            );
          }
        })}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default DetailPageCarousel;
