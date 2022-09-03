import { useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// for login
import { useDispatch } from "react-redux";
import { loggedIn } from "./redux/features/auth/authSlice";

// Component
import Sidebar from "./components/Sidebar";

//  Pages
import Error from "./pages/404";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedAuth from "./ProtectedAuth";
import ProtectedRoutes from "./ProtectedRoutes";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Majors from "./pages/Majors";
import EachFaculty from "./pages/EachFaculty";

function App() {
  // const isError = useSelector((state) => state.auth.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loggedIn(user.email));
    }
  }, [dispatch]);

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/faculty/:id" element={<EachFaculty />}/>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/major" element={<Majors />} />
          </Route>
          <Route element={<ProtectedAuth />}>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
