import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "react/pages/Home";
import Orders from "react/pages/orders";
import UseMemoExample from "./react/hooks/useMemo";
import UseRefExamples from "./react/hooks/UseRefExamples";
import "./App.css";
import { useTheme } from "./react/hooks/useTheme";
import Pagenation from "./react/pagenation/pagenation";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/pagination" element={<Pagenation />} />
          <Route path="/use-ref" element={<UseRefExamples />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
