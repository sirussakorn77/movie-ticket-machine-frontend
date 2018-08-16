import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react'
import Searchbar from '../src/components/Searchbar'
import Homecard from '../src/components/Homecard'

const { Header, Content, Footer } = Layout;


const Test =() => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
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
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Searchbar />
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}><Homecard /></div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>

  )

  export default Test