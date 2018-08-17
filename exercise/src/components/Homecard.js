import { Row,Col } from 'antd';
import Router from 'next/router'
import CardDetail from '../components/CardDetail'


const array = [
  {
    name: '1',
    detail: 'detail-1',
    price: 100,
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    content:'testsetestsetststset'
  },
  {
    name: '2',
    detail: 'detail-2',
    price: 100,
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '3',
    detail: 'detail-3',
    price: 100,
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '4',
    detail: 'detail-4',
    price: 100,
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '5',
    detail: 'detail-5',
    price: 100,
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '6',
    detail: 'detail-6',
    price: 100,
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '7',
    detail: 'detail-7',
    price: 100,
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    name: '8',
    detail: 'detail-8',
    price: 100,
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  
]

const onCardClick = (data) => {
  return (e) =>{
    e.preventDefault()
    Router.push({
    pathname: '/detail',
    query: {
      name: data.name,
      src: data.src,
      detail: data.detail,
      price: data.price,
      content: data.content
    }
  })
  }
}

const renderCard = () => (
  array.map((idx)=>
  <Col span={6}>
    <CardDetail data={idx} onCardClick={onCardClick} />
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