import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFolder} from "@fortawesome/free-solid-svg-icons";


const TreeChildren = ({ subcategory,category }) => {
  return (
    <div>
      {console.log(subcategory)}

      {category === undefined ? '' : <div>
        <FontAwesomeIcon
            icon={faFolder}
        />{category.title}
      </div>
      }
      {subcategory.subcategory.map(subcategory => {
        return (
          <div style={{"padding-left":"30px"}}>
            <FontAwesomeIcon
                icon={faFolder}
            />
            {subcategory.title}
            {subcategory.subcategory.length > 0 ? (
              <TreeChildren subcategory={subcategory} />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

TreeChildren.propTypes = {};

export default TreeChildren;
