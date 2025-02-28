import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <Router>
      <div className='flex'>
        <Sidebar />
      <div className='flex-1'>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Dashboard />} />
        </Routes>

      </div>
      </div>
    </Router>
  );
}

export default App;
