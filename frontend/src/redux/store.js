import { configureStore } from "@reduxjs/toolkit";
import facultiesReducer from "./features/facultiesSlice";
import facultyReducer from "./features/facultySlice";
import authReducer from "./features/auth/authSlice";
import evaluationsReducer from "./features/evaluations";
import evaluationsCategoryReducer from "./features/evaluationsCategory";
import commentsReducer from "./features/commentsSlice";

export const store = configureStore({
  reducer: {
    faculties: facultiesReducer,
    faculty: facultyReducer,
    auth: authReducer,
    evaluations: evaluationsReducer,
    evaluationsCategory: evaluationsCategoryReducer,
    comments: commentsReducer,
  },
});
