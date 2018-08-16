import { Card,Row,Col } from 'antd';
import Router from 'next/router'

const { Meta } = Card;

const array = [
  {
    name: '1',
    detail: 'detail-1',
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '2',
    detail: 'detail-2',
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '3',
    detail: 'detail-3',
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '4',
    detail: 'detail-4',
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '5',
    detail: 'detail-5',
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '6',
    detail: 'detail-6',
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '7',
    detail: 'detail-7',
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '8',
    detail: 'detail-8',
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  
]

const onCardClick = (name, src, detail) => {
  return (e) =>{
    e.preventDefault()
    Router.push({
    pathname: '/detail',
    query: {
      name,
      src,
      detail
    }
  })
  }
}

const renderCard = () => (
  array.map((idx)=>
  <Col span={6}><Card
  hoverable
  onClick={onCardClick(idx.name, idx.src, idx.detail)}
  style={{ width: 240 }}
  cover={<img alt={idx.name} src={idx.src} />}
>
  <Meta
    title={idx.name}
    description={idx.detail}
  />
</Card>
</Col>
))

const Homecard = () => (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
          {renderCard()}
    </Row>
  </div>
)

export default Homecard