import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies =  [
  {
    id: 1,
    title: "A",
    poster: "https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjVfMzAw/MDAxNDg4MDMxNzMzNjAx.W08rC1Qu9efPr0Xc-jdEp93ebOcaYPxjkaJZev29Xgkg.UP6NTs2ZNb6Q0XJfhhZKyyzige1xTQ5I2PVUvzEu6gEg.JPEG.star-com/20170225_225949.jpg?type=w800",
  },
  {
    id: 2,
    title: "B",
    poster: "https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjVfMjY3/MDAxNDg4MDMxNzMzMDQy.vatvwDcd9AGzlAEi0bWPBRndFVaVWSXXJ77gmvYQTYYg.5OCw7RmkhiTxVzJT6Pi-_IPfEmLZ_pdeD3hxw6DiFcIg.JPEG.star-com/20170225_230002.jpg?type=w800",
  },
  {
    id: 3,
    title: "C",
    poster: "https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjVfOTkg/MDAxNDg4MDMxNzMyNzk3.6P7GEFDtFcaSnJt66Zu003ENKKsP0orOyLa3GdOWhDcg.v6onr4l44EB-2laSigOkAjT2GrwUBeTzpGUrGNXChsMg.JPEG.star-com/20170225_230013.jpg?type=w800",
  },
  {
    id: 4,
    title: "D",
    poster: "https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjVfMjEw/MDAxNDg4MDMxNzMyNzE2.st20NiEzExifDAvkWNz5Th8npb0PnmpSRB17AWHyHmQg.LPMLS28eJiKzCC3Mi8BTtw3teMk1Vfm77dKrqmVsY4Qg.JPEG.star-com/20170225_230025.jpg?type=w800"
  }
]

class App extends Component {
  state = {
    hello: '안녕하세요'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hello: '안녕하세요2'
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        {this.state.hello}
        {movies.map((movie, index)  => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
