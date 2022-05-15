import React from 'react' 

const changeText=(value)=>{
  if(value){
    return "被點了"
  }
  else
    return ""
 }

const multiButton = ({ label, id, isSelected }) => {
    return (
        <button
          key={id}
          id={id}
        >
          第{label}個案件
          {changeText(isSelected)}
        </button>
    );
};

export default multiButton