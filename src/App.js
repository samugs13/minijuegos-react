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
