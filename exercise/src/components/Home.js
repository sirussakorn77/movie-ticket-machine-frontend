import { Row, Col } from 'antd'
// import '../../static/style/antd.css'
import HOME from '../constants/home.json'

const Home = () => (
    <Row>
        <Col span={4} offset={4}>{HOME.title}</Col>
    </Row>
)

export default Home