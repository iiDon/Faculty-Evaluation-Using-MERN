import React from "react";

const EachEvaluations = (categoryname, handleEachEval) => {

  const handlePercentage = () => {
    return categoryname.handleEachEval * 20;
  };

  
  return (
    <div className="w-full">
      <div className="md:flex items-center mt-1 w-full">
        <div className=" w-1/12 my-3 text-main tracking-tighter">
          <span>{categoryname.categoryname}</span>
        </div>
        <div className="w-full">
          <div className="bg-gray-300 w-full rounded-lg h-5">
            <div
              style={{ width: `${handlePercentage()}%` }}
              className={`${categoryname.handleEachEval < 3? "bg-red-700" : categoryname.handleEachEval > 4? "bg-green-700" : "bg-main"} rounded-lg h-5 text-white text-center text-sm `}
            >
              {categoryname.handleEachEval}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachEvaluations;
