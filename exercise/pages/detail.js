import React from 'react'
import propTypes from 'prop-types'
import { Row,Col,Layout,Card} from 'antd';
import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import CardDetail from '../src/components/CardDetail'
import Modal from '../src/components/Modal'
import BuyDetail from '../src/components/BuyDetail'

const { Header, Footer, Content } = Layout;


class detail extends React.Component {

 render(){
   const { query } = this.props.router
   const { content } = query
  return (
    <div>
      <Layout style={{ background: '#FF7000'}}>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <h1><p style={{color: 'white'}}>TICKET MOVIES MACHINE By PORPOR </p></h1>
      
      {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>  
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu> */}
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <div style={{ background: '#EFEBE9', padding: 24, minHeight: 380 ,maxWidth: '80vw'}}>
        <Row>
          <Col span={6} offset={2}>
            <CardDetail  data={query}/>
          </Col>
        <Col  span={4} offset={1}>
            <Card title="เรื่องย่อ" bordered={false} style={{ width: 420 ,background:'#F8F8F9'}}>
            <p style={{wordWrap: 'break-word'}}>{content}</p>
            </Card>
        <Col  span={4} offset={1}>
            <Card title="ซื้อตั๋วภาพยนต์"  style={{ width: 380 ,background:'#F8F8F9'}}>
              <Modal data={query}/>
              {this.props.isDetail ? <BuyDetail /> : null}
            </Card>
        </Col>
        </Col>
        </Row>
      </div>
    </Content>

    
    <Footer style={{ background: '#FE7812', textAlign: 'center' }}>CREDIT MAJOR CINEPLEX</Footer>
    
      </Layout>
    </div>)
    }
}

detail.propTypes = {
  query: propTypes.any
}

const mapStateToProps = state => ({
  isDetail: state.isDetail
})

export default connect(mapStateToProps)(withRouter(detail))