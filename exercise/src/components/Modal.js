import propTypes from 'prop-types'
import { Modal, Button,InputNumber  } from 'antd';
import { connect } from 'react-redux'
import { calculatePrice, checkDetail } from '../actions'

class App extends React.Component {
  state = {
    loading: false,
    visible: false,
    ticket: 1,
  }

  onChange = (value) => {
    this.setState({
      ticket: value,
    })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    const { dispatch } = this.props
    const data = {
      data: this.props.data,
      ticket: this.state.ticket
    }
    dispatch(calculatePrice(data))
    dispatch(checkDetail(true))
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          ซื้อ
        </Button>
        <Modal
          visible={visible}
          title="TICKET MOVIES"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
        
          <p><h3>ชื่อ ::{this.props.data.name}</h3></p>
          <p><h3>วันที่ ::   {this.props.data.detail}</h3></p>
          <p><h3>ราคา ::   {this.props.data.price} บาท</h3></p>
          
          
          <InputNumber min={1} max={10} defaultValue={1} onChange={this.onChange} />

        </Modal>
      </div>
    );
  }
}

App.propTypes = {
  data: propTypes.object.isRequired,
}

export default connect()(App)