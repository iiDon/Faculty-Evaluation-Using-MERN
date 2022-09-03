import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvaluationsCategory } from "../../redux/features/evaluationsCategory";
import EachEvaluation from "./EachEvaluation";

const FacultyDetails = ({
  name,
  major,
  handleEvaluations, //
  evaluations,
  id,
  countEvaluations,
}) => {
  const { category } = useSelector((state) => state.evaluationsCategory);
  const dispatch = useDispatch();

  // pring data if they are not fetched
  useEffect(() => {
    if (!category) {
      dispatch(getEvaluationsCategory());
    }
  }, [dispatch]);

  // caclate each category evaluation for each faculty member
  const handleEachEval = (cateId, id) => {
    let total = 0;
    let count = 0;
    evaluations.map((evaluation) => {
      if (evaluation.evaluationCategory_id._id === cateId) {
        if (evaluation.faculty_id !== null) {
          if (evaluation.faculty_id._id === id) {
            total = total + evaluation.value;
            count++;
          }
        }
      }
    });
    return isNaN(total / count) ? "0.00" : (total / count).toFixed(2);
  };

  return (
    <article className="p-6 bg-white sm:p-8 rounded-xl ring ring-indigo-50 m-8">
      <div className="flex items-start border-b py-5 ">
        <div
          className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-main"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1">
            <span className="text-main text-xl rounded-full">
              {handleEvaluations}
            </span>
          </div>
        </div>

        <div className="sm:mr-8 w-full">
          <strong className="rounded border border-main bg-main px-3 py-1.5 text-[12px] text-white w-full">
            {name}
          </strong>

          <h2 className="mt-4 text-sm font-medium sm:text-sm w-full">
            {major}
          </h2>
        </div>
      </div>
      <div className="mb-1 tracking-wide px-4 py-4 w-full">
        <h2 className=" font-semibold mt-1 w-full text-third">
          {countEvaluations + " تقييمات"}
        </h2>
        <div className="border-b pb-3 w-full">
          {category &&
            category.map((category) => (
              <div key={category._id}>
                <EachEvaluation
                  categoryname={category.name}
                  handleEachEval={handleEachEval(category._id, id)}
                />
              </div>
            ))}
        </div>
      </div>
    </article>
  );
};

export default FacultyDetails;
