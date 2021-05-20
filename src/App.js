import './App.css';
import './css/main.css';
import PrivateRouter from './utils/PrivateRouter.js';
import Dashboard from './components/dashboard/Dashboard.js';

function App() {
    return <PrivateRouter path="/" component={Dashboard} />;
}

export default App;
