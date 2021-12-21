import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';

import Home from './components/home/home.component';
import Quiz from './components/quiz/quiz.component';
import Tictactoe from './components/tictactoe/tictactoe.component';
import Navbar from './Navbar.component';

// Language selector
import { LangContext } from "./components/lang/LangContext.component";
import es from './assets/lang/es.json';
import en from './assets/lang/en.json';
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
					<Navbar/>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/quiz/" element={<Quiz/>}/>
						<Route path="/tictactoe/" element={<Tictactoe/>}/>
					</Routes>
				</BrowserRouter>
			</LangContext.Provider>
		</div>
	);
}

export default App;
