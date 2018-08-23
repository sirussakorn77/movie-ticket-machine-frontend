import { Layout,Menu,Breadcrumb,Carousel } from 'antd';
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
      <div style={{ background: '#FEFEFE', padding: 24, minHeight: 380 }}>
        <Carousel autoplay>
          <img src="../../static/img/5.PNG" width = '100%' height = '250px'/>
          <img src="http://xboxgamerreviews.com/wp-content/uploads/2016/02/marvel-puzzle-q-Screenshot-2016-02-19-10-46-21-e1455879054518.png" width = '100%' height = '250px'/>
          
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        
        <Homecard />
      </div>
    </Content>
    <Footer style={{ background: '#FE7812', textAlign: 'center' }}>Credit :: Major Cineplex</Footer>
      Ant Design ©2018 Created by Ant UED
  </Layout>

<style jsx global>{`
  .ant-carousel .slick-slide {
    text-align: center;
    height: 200px;
    line-height: 170px;
    background: #3B929B;
    overflow: hidden;
  }
      
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`}</style>
</div>
)

export default HomeLayout