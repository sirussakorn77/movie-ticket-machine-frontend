import { Card,Row,Col } from 'antd';

const { Meta } = Card;

const Homecard = () => (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
      <Col span={5}>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Name"
      description="detail"
    />
  </Card>
  </Col>
  <Col span={5}>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Name"
      description="detail"
    />
  </Card>
  </Col>
  <Col span={5}>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Name"
      description="detail"
    />
  </Card>
  </Col>
  <Col span={5}>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Name"
      description="detail"
    />
  </Card>
  </Col>
    </Row>
  </div>
)

export default Homecard