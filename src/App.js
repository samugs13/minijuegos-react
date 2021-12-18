import React, { Component, useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';

import Home from './components/home/home.component';
import Quiz from './components/quiz/quiz.component';
import Tictactoe from './components/tictactoe/tictactoe.component';

import es from './lang/es.json';
import en from './lang/en.json';
import { LangContext } from "./lang/LangContext";
import LangSelector from "./lang/LangSelector";
const dictionaryList = { en, es };


function App() {

	const handleLanguageChange = (event) => {
		setLang(event.target.value);
	}

	const [lang, setLang] = useState('es');

	return (
		<div className="App">
			<LangContext.Provider value={{handleLanguageChange: handleLanguageChange, userLang: lang, dictionary: dictionaryList[lang]}}>
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
								<LangSelector />
							</div>
						</div>
					</nav>


					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/quiz/" element={<Quiz/>}/>
						<Route path="/tictactoe/" element={<Tictactoe/>}/>
					</Routes>
				</BrowserRouter>,
			</LangContext.Provider>
		</div>
	);
}

export default App;
