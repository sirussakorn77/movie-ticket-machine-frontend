import { Component } from 'react'
import { Row,Col } from 'antd'
import Router from 'next/router'
import { connect } from 'react-redux'
import CardDetail from '../components/CardDetail'
import { getAllMovies } from '../lib/firebase'
import { updateAllMovies } from '../actions'


class Homecard extends Component {

  componentDidMount(){
    this.getMovie()
  }

  onCardClick(data){
    return (e) =>{
      e.preventDefault()
      Router.push({
      pathname: '/detail',
      query: {
        name: data.name,
        src: data.src,
        director: data.director,
        detail: data.detail,
        actor: data.actor,
        price: data.price,
        content: data.content
      }
    })
    }
  }
  

  getMovie() {
    const {dispatch} = this.props
    getAllMovies().then((data) => {
      console.log(data)
      dispatch(updateAllMovies(data))
    })
  }
  

  render() {
    return(
      <div style={{ background: '#DFDFDF', padding: '35px' }}>
        <Row gutter={16}>
            {this.props.movies ? this.props.movies.map((idx)=>
    <Col  span={6}>
      <CardDetail data={idx} onCardClick={this.onCardClick} />
    </Col>) : <h2>Loading... </h2>}
        </Row>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  movies: state.movies
}) 

export default connect(mapStateToProps)(Homecard)