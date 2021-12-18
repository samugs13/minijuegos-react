import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';

import Home from './components/home/home.component';
import Quiz from './components/quiz/quiz.component';
import Tictactoe from './components/tictactoe/tictactoe.component';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<nav className="navbar navbar-expand navbar-dark bg-dark">
					<div className="container-fluid">
						<a className="navbar-brand" href="/">Games</a>
						<div className="navbar-nav me-auto">
							<li className="nav-item">
								<Link to={"/"} className="nav-link">Home</Link>
							</li>
							<li className="nav-item">
								<Link to={"/quiz"} className="nav-link">Quiz</Link>
							</li>
							<li className="nav-item">
								<Link to={"/tictactoe"} className="nav-link">TicTacToe</Link>
							</li>
						</div>
						<div className="d-flex">
							<div className="dropdown me-2">
								<select defaultValue="en" className="form-select" aria-label="Select language">
									<option value="en">English</option>
									<option value="es">Español</option>
								</select>
							</div>
						</div>
					</div>
				</nav>

				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/quiz/" element={<Quiz/>}/>
					<Route path="/tictactoe/" element={<Tictactoe/>}/>
				</Routes>
			</BrowserRouter>,
		</div>
	);
}

export default App;
