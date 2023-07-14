import './MovieContainer.css';
import Card from '../Card/Card';

function MovieContainer(props) {
  let movieFilter=[]
  let movieCards= []
  const filterMovies = props.filtered
  if(props.search){
    movieFilter = filterMovies.map(filteredMovie => {
      return (
        <div className= '.movie-container'>
        <Card 
        title={filteredMovie.title}
        img={filteredMovie.poster_path}
        rating={filteredMovie.average_rating}
        id={filteredMovie.id}
        key={filteredMovie.id}
        />
      </div>
      )
    })
  } else if (!props.search) {
  movieCards = props.movies.map(movie => {
    return (
        <div className= '.movie-container'>
          <Card 
          title={movie.title}
          img={movie.poster_path}
          rating={movie.average_rating}
          id={movie.id}
          key={movie.id}
          showMovie= {props.showMovie}
          />
        </div>
        
    )
  })
}
if(props.search && !movieFilter.length) {
  return (<p>Sorry, based on your search there are no movies available. Try again! </p>)
}
  return (
    <div className='movie-container'>
      {movieCards}
      {movieFilter}
    </div>
  )
}

export default MovieContainer