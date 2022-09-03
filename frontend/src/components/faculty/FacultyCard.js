import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFaculties } from "../../redux/features/facultiesSlice";
import { getEvaluations } from "../../redux/features/evaluations";

const FacultyCard = ({ search }) => {
  const { faculties, isLoading } = useSelector((state) => state.faculties);
  const { evaluations, isLoading: Loading } = useSelector(
    (state) => state.evaluations
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!faculties) {
      dispatch(getFaculties());
      dispatch(getEvaluations());
    }
  }, [dispatch]);

  const tableHeader = ["الاسم", "التخصص", "عدد التقييمات", "التقييم"];

  // Calculate how many evluation does each faculty has
  const countEvaluations = (id) => {
    let count = 0;
    for (let evaluation = 0; evaluation < evaluations?.length; evaluation++) {
      if (evaluations[evaluation].faculty_id !== null) {
        if (evaluations[evaluation].faculty_id._id === id) {
          count++;
        }
      }
    }
    return count;
  };

  // Calculate the avg of all evaluation for each faculty
  const evaluation = (id) => {
    let count = 0; // count to calc the avg after
    let allEval = 0; // all sum eval

    for (let evaluation = 0; evaluation < evaluations?.length; evaluation++) {
      if (evaluations[evaluation].faculty_id !== null) {
        if (evaluations[evaluation].faculty_id._id === id) {
          count++;
          allEval = allEval + evaluations[evaluation].value;
        }
      }
    }
    const finalEval = allEval / count;
    if (!finalEval) {
      return "غير متوفر";
    }
    return finalEval.toFixed(2);
  };

  return (
    <div className="mx-auto px-4 sm:px-8 max-w-full">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            {isLoading || Loading ? (
              <p>Loading...</p>
            ) : (
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    {tableHeader?.map((head, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-third  text-right text-sm uppercase font-normal"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {faculties &&
                    faculties
                      .filter((val) => {
                        if (search === "") {
                          return val;
                        } else if (
                          val.name.includes(search) ||
                          val.major_id.name.includes(search)
                        ) {
                          return val;
                        }
                      })
                      .map((facuulty) => (
                        <tr key={facuulty._id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <Link
                              to={facuulty._id}
                              className="text-gray-900 whitespace-no-wrap"
                            >
                              <div className="flex items-center">
                                <div className="ml-3">{facuulty.name}</div>
                              </div>
                            </Link>
                          </td>

                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {facuulty.major_id.name}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {countEvaluations(facuulty._id)}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                              className={`relative inline-block px-3 py-1 font-semibold ${
                                evaluation(facuulty._id) < 2
                                  ? "text-red-900"
                                  : evaluation(facuulty._id) < 4
                                  ? "text-red-900"
                                  : "text-green-900"
                              }  leading-tight`}
                            >
                              <span
                                aria-hidden="true"
                                className={`absolute inset-0 ${
                                  evaluation(facuulty._id) < 2
                                    ? "bg-red-200"
                                    : evaluation(facuulty._id) < 4
                                    ? "bg-yellow-200"
                                    : "bg-green-200"
                                } opacity-50 rounded-full`}
                              ></span>
                              <span className="relative">
                                {evaluation(facuulty._id)}
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
