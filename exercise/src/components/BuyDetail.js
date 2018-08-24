import { connect} from 'react-redux'
import { Modal, Button, InputNumber  } from 'antd'
import { calculateChange } from '../actions'
import ModalExchange from '../components/ModalExchange'

let money
class BuyDetail extends React.Component {
    state = {
        loading: false,
        visible: false,
    }

    showModal = () => {
        const { dispatch } = this.props

        dispatch(calculateChange(money-this.props.total))

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

    render() {
        const { movies, ticket, total, changes} = this.props
        const { visible } = this.state;

        return (
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
                คิดเงิน
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
                    {
                        changes && changes.length > 0 ? 
                        changes.map((change, index)=>{
                            return (
                                <p key={index}>{change.type + ": " + change.value + ' ' + change.unitType}</p>
                            )
                        }) : <p>Some Failed...</p>
                    }
                   
                </Modal>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    ticket: state.ticket,
    total: state.total,
    changes: state.changes
}) 

export default connect(mapStateToProps)(BuyDetail)