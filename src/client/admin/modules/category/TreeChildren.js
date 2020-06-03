import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFolder} from "@fortawesome/free-solid-svg-icons";


const TreeChildren = ({ subcategory,category,editCategory }) => {

  return (
    <div>
      {category === undefined ? '' :
          <div style={{"cursor":"pointer"}} onClick={()=>editCategory(category)}>
        <FontAwesomeIcon
            icon={faFolder}
        />{category.title}
      </div>
      }
      {subcategory.subcategory.map(subcategory => {
        return (
          <div style={{"padding-left":"30px", "cursor":"pointer"}} onClick={()=>editCategory(subcategory)}>
            <FontAwesomeIcon
                icon={faFolder}
            />
            {subcategory.title}
            {subcategory.subcategory.length > 0 ? (
              <TreeChildren subcategory={subcategory} editCategory={editCategory}/>
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
