import React from "react";
import PropTypes from "prop-types";
import Style from "./header.css";


const header = ({changePageName, currentPage}) => {
    const pages = ["Home", "About", "News", "Contact"];

    return(
    <header className="Header-container">
      <div className="Header-logo">Daniyal Sadiq</div>
      <ul className="Header-container-ul">
        {pages.map((page, index) => (
                <li
                key={index}
                onClick={() => changePageName(page)}
                className={currentPage === page ? "Header-li-active" : ""}
                >
                    {page}
                </li>
            ))}
        </ul>
        </header>
    );
};
header.propTypes = {
    changePageName: PropTypes.func.isRequired,
    currentPage: PropTypes.string.isRequired,
  };
  
  export default header;


