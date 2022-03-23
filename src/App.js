import Home from "./pages/Index";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import AllProjects from "./component/Projects/AllProjects";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </>
  );
};

export default App;
