import { Card, Col, Row } from 'antd';

const Cardtitle =() => (
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={6}>
        <Card title="Card title" bordered={false}>Card content</Card>
      </Col>
      <Col span={6}>
        <Card title="Card title" bordered={false}>Card content</Card>
      </Col>
      <Col span={6}>
        <Card title="Card title" bordered={false}>Card content</Card>
      </Col>
      <Col span={6}>
        <Card title="Card title" bordered={false}>Card content</Card>
      </Col>
    </Row>
  </div>
)
  export default Cardtitle