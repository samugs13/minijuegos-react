import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LangContext } from "../lang/LangContext.component";
import LangSelector from "../lang/LangSelector.component";

export default function Navbar() {

    const lang = useContext(LangContext);

	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{lang.dictionary["title"]}</a>
                <div className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link">{lang.dictionary["home"]}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/quiz"} className="nav-link">{lang.dictionary["quiz"]}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/tictactoe"} className="nav-link">{lang.dictionary["tictactoe"]}</Link>
                    </li>
                </div>
                <div className="d-flex">
                    <LangSelector />
                </div>
            </div>
		</nav>
	);
}
