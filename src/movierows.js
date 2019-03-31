import React from 'react';
import './App.css';

class Movierows extends React.Component{
 
    render(){
        return  <table key ={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="moviePoster" src={this.props.movie.poster_src}/>
            </td>
            <td className="movieDes">
              <h2>{this.props.movie.title}</h2>
              <p>{this.props.movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>

 }

}

export default Movierows

