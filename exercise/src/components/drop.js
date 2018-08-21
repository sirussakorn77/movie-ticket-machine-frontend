import { Menu, Dropdown, Icon, message } from 'antd';
import {sortAllMovies, clearData} from '../actions'
import { connect } from 'react-redux'

class Dropdownn extends React.Component{

    handleMenuClick() {
        const {dispatch, movies} = this.props
        dispatch(clearData(movies))
        dispatch(sortAllMovies(movies))
      }
      
    menu(){
        return<Menu onClick={this.handleMenuClick()}>
                    <Menu.Item key="1"><Icon type="user" />A-Z,ก-ฮ</Menu.Item>
                </Menu>
    }

    render(){
        return(
            <div>
                <Dropdown.Button overlay={this.menu()}>
                Dropdown
                </Dropdown.Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
  }) 

export default connect(mapStateToProps)(Dropdownn)
