import React from 'react'
import Home from '../src/components/Home'
import { Card } from 'antd';
import HomeLayout from '../src/components/HomeLayout'
import { withRouter } from 'next/router'


const { Meta } = Card;

const detail = (router) => {
  const { name, src, detail } = router.url.query
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={name} src={src} />}
      >
        <Meta
          title={name}
          description={detail}
        />
      </Card>
    </div>
)}

export default withRouter(detail)