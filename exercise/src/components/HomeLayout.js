import { Layout,Breadcrumb,Carousel } from 'antd';
import '../../static/style/antd.css'
import Homecard from '../components/Homecard'
import Dropdown from '../components/drop'

const { Header, Footer, Content } = Layout;

const HomeLayout = () =>(
<div>
    <Layout style={{ background: '#FE7812'}}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <h1><p style={{color: 'white'}}>TICKET MOVIES MACHINE By PORPOR </p></h1>
      </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
     {/*  <Dropdown /> */}
      </Breadcrumb>
      <div style={{ background: '#FEFEFE', padding: 24, minHeight: 380 }}>
        <Carousel autoplay>        
          <img src="static/img/Mission-Impossible-Fallout-Dolby-poster-cropped22.jpg" width = '100%' height = '425px'/>
          <img src="static/img/BNK48GIRLSDONT-CRY1.png" width = '100%' height = '425px'/>
          <img src="static/img/pc2iex1rNCkxnhuL6c-o1.png" width = '100%' height = '425px'/>
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