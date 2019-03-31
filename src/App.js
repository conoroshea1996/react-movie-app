import React, { Component } from 'react';
import Movierows from './movierows';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor (props){
    super(props)
    this.state = {};

   // const movies=[
   //   { id: 0, posterPath:"https://media5.picsearch.com/is?ZF5vWLBB6TfNq9fJQHW18MbjiQBnt6nsaWSglxiQQFk&height=341", title: "film-1", description:"film 1 is good"},
   //   { id: 1,posterPath:"https://media1.picsearch.com/is?eSceg9-FcALidQzwgN4E_mI43WN-IsobbBAj8zS2oiE&height=341",title: "film-2", description:"film 2 is baD" }
   // ]

  //  let movielist = [];

  //  movies.forEach((movie)=>{
   //   const movierow = <Movierows movie={movie} />
   //   movielist.push(movierow)
   //   console.log(movie.title);
   // })

   // this.state = {rows : movielist};
    

    this.searchFilm('bob');
  }

  searchFilm(searchTerm){
    console.log('hi m8');
    const urlstring = 'https://api.themoviedb.org/3/search/movie?api_key=972981b1837a6de6ef49bcbe2833a0b3&query=' + searchTerm;
    $.ajax({
      url:urlstring,
      success: (searchFilm) =>{
        console.log(searchFilm) ;
        const results = searchFilm.results;

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src= "https://image.tmdb.org/t/p/w200" + movie.poster_path;
          console.log(movie.poster_path);
          const movierow = <Movierows key ={movie.id} movie={movie}/>
          movieRows.push(movierow);
        });

        this.setState({rows : movieRows});
        
      },
       error: (xhr, status ,err) => {
        console.log('error');
       }
    })
  }
  searchHandler(event){
    console.log(event.target.value);
    const searchTerm = event.target.value;
    this.searchFilm(searchTerm);
  }
  render() {
    return (
      <div className="App">

      <div className="NavBar">
         <h1>Movie DataBase</h1>
      </div>
      <input className="searchbar" placeholder="Find a film.." type="text" onChange={this.searchHandler.bind(this)}></input>
      {this.state.rows}
    </div>
    );
  }
}

export default App;
