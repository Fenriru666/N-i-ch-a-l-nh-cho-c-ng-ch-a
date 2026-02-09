import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DateEntry from './components/DateEntry/DateEntry';
import LovePage from './components/LovePage/LovePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DateEntry />} />
        <Route path="/love" element={<LovePage />} />
      </Routes>
    </Router>
  );
}

export default App;
