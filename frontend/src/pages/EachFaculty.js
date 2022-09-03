import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FacultyDetails from "../components/faculty/FacultyDetails";
import Comments from "../components/faculty/Comments";
const EachFaculty = () => {
  const { id } = useParams();

  const { faculties } = useSelector((state) => state.faculties);
  const { evaluations } = useSelector((state) => state.evaluations);

  const handleEvaluations = (id) => {
    let total = 0;
    let count = 0;
    evaluations &&
      evaluations.map((evaluation) => {
        if (evaluation.faculty_id !== null) {
          if (evaluation.faculty_id._id === id) {
            total = total + evaluation.value;
            count++;
          }
        }
      });
    return isNaN((total / count).toFixed(2)) ? 0 : (total / count).toFixed(2);
  };

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

  return (
    <div className="w-full overflow-auto h-screen">
      {faculties &&
        faculties.map((faculty) =>
          faculty._id === id ? (
            <div key={id}>
              <FacultyDetails
                key={faculty._id}
                name={faculty.name}
                major={faculty.major_id.name}
                handleEvaluations={handleEvaluations(faculty._id)}
                evaluations={evaluations}
                id={id}
                countEvaluations={countEvaluations(faculty._id)}
              />
              <Comments evaluations={evaluations} faculty_id={id} />
            </div>
          ) : (
            ""
          )
        )}
    </div>
  );
};

export default EachFaculty;
