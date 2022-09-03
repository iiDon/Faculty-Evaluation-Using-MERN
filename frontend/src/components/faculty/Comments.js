import React, { useEffect } from "react";
import { getComments } from "../../redux/features/commentsSlice";
import { useSelector, useDispatch } from "react-redux";
import PostComment from "./PostComment";
const Comments = ({ faculty_id, evaluations }) => {
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!comments) {
      dispatch(getComments());
    }
  }, [dispatch]);

  //  Count comments
  const handleCount = () => {
    let count = 0;
    for (let comment = 0; comment < comments?.length; comment++) {
      if (comments[comment].faculty_id?._id === faculty_id) {
        count++;
      }
    }

    return count;
  };
  console.log(handleCount());

  return (
    <div className="m-4 p-4 border rounded-lg  ">
      {handleCount() === 0 ? (
        <h3 className="text-center text-lg">لا يوجد تعليقات</h3>
      ) : (
        <h1 className="">عدد التعليقات: {handleCount()}</h1>
      )}

      {comments &&
        comments.map((comment) => {
          if (comment.faculty_id._id === faculty_id) {
            return (
              <div key={comment._id}>
                <div className="mt-4 border-2  rounded">
                  <ul className="md:flex text-[2px] border-b">
                    <li className="p-3">
                      المعرف: {comment.user_id?._id || "محذوف"}
                    </li>
                    <li className="p-3">المادة: {comment.course_id.name}</li>
                    {evaluations?.map((evaluation) => {
                      {
                        if (evaluation.user_id?._id === comment.user_id?._id) {
                          return (
                            <li className="p-3" key={evaluation._id}>
                              {evaluation.evaluationCategory_id?.name +
                                ": " +
                                evaluation.value}
                            </li>
                          );
                        }
                      }
                    })}
                  </ul>
                  <p className="p-4 rounded">{comment.content}</p>
                </div>
              </div>
            );
          }
        })}
      <PostComment />
    </div>
  );
};

export default Comments;
