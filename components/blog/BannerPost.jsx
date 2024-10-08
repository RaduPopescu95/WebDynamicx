import React from 'react';

const BannerPost = ({ backgroundUrl, heading, description, buttonText, buttonUrl, marginTop }) => {
  return (
    <div
      className={`sidebar-banner-add ${marginTop ? marginTop : " "}`}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="banner-content">
        <h4>{heading}</h4>
        <p>{description}</p>
        <a href={buttonUrl} className="btn-twentyOne fw-500 tran3s">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default BannerPost;
