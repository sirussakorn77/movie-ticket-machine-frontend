import React from 'react'
import { Row,Col,Layout,Menu, Button,Card} from 'antd';
import { withRouter } from 'next/router'
import CardDetail from '../src/components/CardDetail'
import Modal from '../src/components/Modal'

const { Header, Footer, Content } = Layout;


const detail = (router) => {
  const { content } = router.router.query

  return (
    <div>
      <Layout style={{ background: '#FF7000'}}>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      
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
    11111111111111111111111
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <div style={{ background: '#EFEBE9', padding: 24, minHeight: 380 ,maxWidth: '80vw'}}>
      <Row>
      <Col span={6} offset={2}>
      <CardDetail  data={router.router.query}/>
      </Col>
      <Col  span={4} offset={1}>
      <Card title="เรื่องย่อ" bordered={false} style={{ width: 420 ,background:'#F8F8F9'}}>
      <p style={{wordWrap: 'break-word'}}>{content}</p>
    </Card>
      <Modal />
      </Col>
      </Row></div>
      
    </Content>
    


    
    <Footer style={{ background: '#FE7812', textAlign: 'center' }}>GGGG</Footer>
    
      </Layout>
    </div>
    
)}

export default withRouter(detail)