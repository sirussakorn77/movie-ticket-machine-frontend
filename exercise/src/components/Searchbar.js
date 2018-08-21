import { Input } from 'antd';
import {searchAllMovies} from '../lib/firebase'
import { connect } from 'react-redux'
import { updateAllMovies, sortAllMovies, clearData } from '../actions'

const Search = Input.Search;

class Searchbar extends React.Component {

  sort(){
    const {dispatch, movies} = this.props

    console.log(movies)
    dispatch(clearData(movies))
    dispatch(sortAllMovies(movies))
  }
   searchMovies (value){
     const {dispatch} = this.props
    searchAllMovies(value).then((data) => {
      console.log(data)
      dispatch(updateAllMovies(data))
    })
   }

  render() {
    return(
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="small"
        onSearch={value => value ? this.searchMovies(value) : this.sort()}
    />)
  } 
}

const mapStateToProps = state => ({
  movies: state.movies
}) 

  export default connect(mapStateToProps)(Searchbar)