import './App.css';
import PrivateRouter from './PrivateRouter.js';
import Dashboard from './components/dashboard/Dashboard.js';

function App() {
  return (
    <PrivateRouter path="/" component={Dashboard} />
  );
}

export default App;
