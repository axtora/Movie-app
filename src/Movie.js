import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie ({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h3>{title}</h3>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>        
        </div>        
    )
}

function MoviePoster ({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre ({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
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