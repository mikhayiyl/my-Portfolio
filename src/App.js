import Home from "./pages/Index";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./component/Forms/LoginForm";
import AllProjects from "./component/Projects/AllProjects";
import RegisterForm from "./component/Forms/RegisterForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LoginForm />} />

        <Route path="/register" element={<RegisterForm />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </>
  );
};

export default App;
