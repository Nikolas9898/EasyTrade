import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFolder} from "@fortawesome/free-solid-svg-icons";


const TreeChildren = ({ subcategory,category,editCategory }) => {
  const title= category === undefined ? '':category.title
  return (
    <div>
      {category === undefined ? '' : <div>
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
