import { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const ScrollHandler = ({ location, offSetTop }) => {
  useEffect(() => {
    const element = document.getElementById(location.hash);
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop - offSetTop : 0
      });
    }, 100);
  }, [location, offSetTop]);
  return null;
};

ScrollHandler.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string
  }).isRequired
};

export default withRouter(ScrollHandler);