import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';

import Navbar from './components/navbar/Navbar.component';
import Home from './components/home/home.component';
import Quiz from './components/quiz/quiz.component';
import Tictactoe from './components/tictactoe/tictactoe.component';

// Language selector
import { LangContext } from "./components/lang/LangContext.component";
import es from './assets/lang/es.json';
import en from './assets/lang/en.json';
const dictionaryList = { en, es };


function App() {
	const [lang, setLang] = useState('es');

	useEffect(() => {
		const lang = window.navigator.language;
		if (lang.startsWith('es')) {
			setLang('es');
		} else {
			setLang('en');
		}
	}, []);

	const handleLanguageChange = (event) => {
		setLang(event.target.value);
	}

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
