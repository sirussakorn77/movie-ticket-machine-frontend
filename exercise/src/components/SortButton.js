import { Menu, Dropdown, Button, Icon, message } from 'antd'
import { connect } from 'react-redux'
import { sortAllMovies, clearData } from '../actions'
 
class SortButton extends React.Component {

handleMenuClick(e) {
    const { dispatch, movies } = this.props
    const data = {
        type: e.key,
        movie: movies
    }
    dispatch(clearData())
    dispatch(sortAllMovies(data))
}


render(){
    const menu = (
        <Menu onClick={(e) => this.handleMenuClick(e)} >
          <Menu.Item key="1" ><Icon type="arrow-down" />1st menu item</Menu.Item>
          <Menu.Item key="2"><Icon type="arrow-up" />2nd menu item</Menu.Item>
          <Menu.Item key="3"><Icon type="arrow-down" />3rd item</Menu.Item>
          <Menu.Item key="4"><Icon type="arrow-up" />4rd item</Menu.Item>
        </Menu>
      )
      
    return(
          <Dropdown overlay={menu}>
            <Button style={{ marginLeft: 8 }}>
              Sorting <Icon type="down" />
            </Button>
          </Dropdown>)
    }
}

const mapStateToProps = state => ({
    movies: state.movies
  }) 
  
export default connect(mapStateToProps)(SortButton)