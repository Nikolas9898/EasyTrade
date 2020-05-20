import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFolder} from "@fortawesome/free-solid-svg-icons";


const TreeChildren = ({ subcategory,category,deleteCategory }) => {
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
          <div style={{"padding-left":"30px"}}>
            <FontAwesomeIcon
                icon={faFolder}
            />
            {subcategory.title}<button onClick={()=>deleteCategory(title,subcategory)}>-</button>
            {subcategory.subcategory.length > 0 ? (
              <TreeChildren subcategory={subcategory} deleteCategory={deleteCategory}/>
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
