import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFound from 'pages/NotFound';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/register" element={ <RegisterPage /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </div>
    );
}

export default App;
