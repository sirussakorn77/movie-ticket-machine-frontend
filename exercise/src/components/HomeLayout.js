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
        <h1><p style={{color: 'white'}}>TICKET MOVIES MACHINE By PORPOR </p></h1>
     
        {/* <Menu.Item key=""><Dropdown /></Menu.Item> */}
     
      </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
      
      </Breadcrumb>
      <div style={{ background: '#FEFEFE', padding: 24, minHeight: 380 }}>
        <Carousel autoplay>        
          <img src="https://www.centives.net/S/wp-content/uploads/2015/12/Cost-of-Darth-Vader_Banner-756x250.jpg" width = '100%' height = '250px'/>
          <img src="http://www.brookvalepta.com/wp-content/uploads/2013/03/brave_banner-756x250.jpg" width = '100%' height = '250px'/>
          <img src="http://hotmall.com.tw/wp-content/uploads/2012/03/DSC00192-756x250.jpg" width = '100%' height = '250px'/>
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