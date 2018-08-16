import React from 'react'
import { Card,Row,Col,Layout,Menu} from 'antd';
import { withRouter } from 'next/router'

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

const success = (name) => (e) => {
  alert(name + "ok")
}

const detail = (router) => {
  const { name, src, detail,price,content } = router.url.query
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
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
      <Row>
      <Col span={6} offset={2}><Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={name} src={src} />}
        onClick={success(name)}
      >
        <Meta
          title={name}
          description={detail +'price: '+ price}
        />
      </Card>
      
      </Col>
      <Col>
      {content}
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