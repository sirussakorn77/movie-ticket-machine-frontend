import { connect} from 'react-redux'
import { Modal, Button, InputNumber  } from 'antd'
import ModalExchange from '../components/ModalExchange'

let money
class BuyDetail extends React.Component {
    state = {
        loading: false,
        visible: false,
      }

      showModal = () => {
          
        this.setState({
          visible: true,
        });
      }
    
      handleOk = () => {
        this.setState({ visible: false });
      }
        
    onChange(value){
       money = value
    }

    render(){

        const { movies, ticket, total} = this.props
        const { visible } = this.state;

        return(
            <div>
                <p>----------------------------------------------------------</p>
                <p>ชื่อ : {movies.name}</p>
                <p>ราคาต่อใบ :  {movies.price} บาท</p>
                <p>จำนวนตั๋ว :  {ticket} ใบ</p>
                <p>ราคารวม :  {total} บาท</p>
                <InputNumber
                    defaultValue={0}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={this.onChange}
                />
                <Button type="primary" onClick={this.showModal}>
                Submit
                </Button>
                <Modal
                visible={visible}
                title="TICKET MOVIES MACHINE : เงินทอน"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" type="primary"onClick={this.handleOk}>
                    Ok
                    </Button>,
                ]}
                >
                
                <p>money : {money}</p>
                <p>total : {total}</p>
                <p>Some contents...</p>
                <p>Some contents...</p>

                </Modal>
                
            </div>

        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    ticket: state.ticket,
    total: state.total
  }) 

export default connect(mapStateToProps)(BuyDetail)