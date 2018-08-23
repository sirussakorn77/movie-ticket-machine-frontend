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
          Open
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
        
          <p>{this.props.data.name}</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
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