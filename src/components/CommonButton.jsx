import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes for type validation
import "../styles/common-button.scss";

const CommonButton = ({
  btnImg,
  width,
  height,
  seeMore,
  handleClick,
}) => {
  // Add propTypes for type validation
  CommonButton.propTypes = {
    btnImg: PropTypes.string.isRequired, // btnImg should be a required string
    width: PropTypes.string, // width is an optional string
    height: PropTypes.string, // height is an optional string
    seeMore: PropTypes.bool, // seeMore is an optional boolean
    handleClick: PropTypes.func.isRequired, // handleClick should be a required function
  };

  return (
    <button
      className={`common-button`}
      style={{ width: width, height: height }}
      onClick={handleClick} // Conditionally attach handleClick based on seeMore prop
    >
      <img src={btnImg} className="dynamicBtn" />
    </button>
  );
};

export default CommonButton;
