import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewDetail from "./components/ViewDetails";
import DataGridPage from "./pages/DataGridPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataGridPage />} />
        <Route path="/view/:id" element={<ViewDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
