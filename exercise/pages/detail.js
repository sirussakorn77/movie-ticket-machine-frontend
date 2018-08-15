import React from 'react'
import { Card,Row,Col,Layout,Menu} from 'antd';
import { withRouter } from 'next/router'
import Nextpage from '../src/components/Nextpage'

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

const detail = (router) => {
  const { name, src, detail } = router.url.query
  return (
    <div>
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
     <Header><div className="header" >
      <Menu
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="product">
          <h3>Product</h3>
        </Menu.Item>
        <Menu.Item key="About">
          <h3>About</h3>
        </Menu.Item>
      </Menu>
    </div></Header>
    
      <Row>
      <Col span={12} offset={6}><Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={name} src={src} />}
      >
        <Meta
          title={name}
          description={detail}
        />
      </Card></Col>
      
      </Row>
      <Content><Nextpage /></Content>
      <Footer>Footer</Footer>
    </div>
    
)}

export default withRouter(detail)