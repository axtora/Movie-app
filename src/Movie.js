import React from 'react';
import './Movie.css';

function Movie({title, poster}) {
    return (
    <div>
        <MoviePoster poster={poster}/>
        <h3>{title}</h3>
    </div>        
    )
}

function MoviePoster ({poster}) {
    return (
        <img src={poster} alt='Movie poster' />
    )
}

// class Movie extends Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h3>{this.props.title}</h3>
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component {
//     render() {
//         return (
//             <img src={this.props.poster} alt='movie poster' />
//         )
//     }
// }



export default Movie;