import { Layout } from 'antd';
import '../../static/style/antd.css'
import Homecard from '../components/Homecard'
import Searchbar from '../components/Searchbar'
const { Header, Footer, Content } = Layout;

const HomeLayout = () =>(

    <Layout>
    <Header>GG</Header>
    <Searchbar />
    <Homecard /> 

    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>

)

export default HomeLayout