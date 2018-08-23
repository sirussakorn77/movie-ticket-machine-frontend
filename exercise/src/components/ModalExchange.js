import propTypes from 'prop-types'
import { Modal, Button } from 'antd'

class ModalExchange extends React.Component {
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

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Submit
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" type="primary"onClick={this.handleOk}>
              Ok
            </Button>,
          ]}
        >
        
          <p>money : {this.props.money}</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>

        </Modal>
      </div>
    );
  }
}

ModalExchange.propTypes = {
    money: propTypes.number.isRequired,
  }
  

export default ModalExchange