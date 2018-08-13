import { Layout,Menu } from 'antd';
import '../../static/style/antd.css'
import Homecard from '../components/Homecard'
import Searchbar from '../components/Searchbar'
import Nextpage from '../components/Nextpage'
import Cardtitle from '../components/Cardtitle'
const { Header, Footer, Content } = Layout;

const HomeLayout = () =>(
<div>
<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
    <Layout>
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
    
    <Searchbar />
    <Homecard /> 
    <Content><Nextpage /></Content>
    <Footer>Footer</Footer>
  </Layout>


</div>
)

export default HomeLayout