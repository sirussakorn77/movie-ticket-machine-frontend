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
      <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>  
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 ,maxWidth: '80vw'}}>
      <Row>
      <Col span={6} offset={2}>
      <CardDetail data={router.router.query}/>
      </Col>
      <Col  span={4} offset={1}>
      <Card title="Card title" bordered={false} style={{ width: 400 ,background:'#F8F8F9'}}>
      <p style={{wordWrap: 'break-word'}}>{content}</p>
    </Card>
      <Modal />
      </Col>
      </Row></div>
      
    </Content>
    


    
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED

     
    </Footer>
      
      </Layout>
    </div>
    
)}

export default withRouter(detail)