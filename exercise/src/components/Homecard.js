import { Component } from 'react'
import { Row,Col } from 'antd'
import Router from 'next/router'
import { connect } from 'react-redux'
import CardDetail from '../components/CardDetail'
import { getAllMovies } from '../lib/firebase'
import { updateAllMovies } from '../actions'


class Homecard extends Component {
  state = {
    movies: []
  }

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
        detail: data.detail,
        price: data.price,
        content: data.content
      }
    })
    }
  }
  

  async getMovie() {
    const {dispatch} = this.props
    getAllMovies().then((data) => {
      console.log(data)
      dispatch(updateAllMovies(data))
    })
  }
  

  render() {
    return(
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
            {this.props.movies ? this.props.movies.map((idx)=>
    <Col span={6}>
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