import { Layout,Menu,Breadcrumb } from 'antd';
import '../../static/style/antd.css'
import Homecard from '../components/Homecard'
import Searchbar from '../components/Searchbar'
import Dropdown from '../components/drop'

const { Header, Footer, Content } = Layout;

const HomeLayout = () =>(
<div>
    <Layout style={{ background: '#FE7812'}}>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">กำลังฉาย</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>  
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="4"><Searchbar /></Menu.Item>
        {/* <Menu.Item key=""><Dropdown /></Menu.Item> */}

      </Menu>
      
      
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
      </Breadcrumb>
      <div style={{ background: '#FEFEFE', padding: 24, minHeight: 380 }}>PORPOR TICKET MOVIES 2018<Homecard /></div>
    </Content>
    <Footer style={{ background: '#FE7812', textAlign: 'center' }}>
    </Footer>
      Ant Design ©2018 Created by Ant UED
  </Layout>


</div>
)

export default HomeLayout