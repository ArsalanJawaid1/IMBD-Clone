import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import MovieList from "./Components/MovieList/MovieList";
import Moviedetail from "./Components/MovieDetail/Moviedetail";
function App() {
  return (
    <div className="App">
      
    <Router>
      <Header />
        <Routes>
          <Route index  element = {<h1> <Home /> </h1>} ></Route>
          <Route path="movie/:id" element = {<Moviedetail />}  > </Route>
          <Route path="movies/:type" element = { <MovieList /> }  > </Route>
          <Route path="/*" element = {<h1> Error Page  </h1>}  > </Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
