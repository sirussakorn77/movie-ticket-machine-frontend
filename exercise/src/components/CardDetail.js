import { Card,} from 'antd';

const { Meta } = Card;

const CardDetail =({data, onCardClick}) => (
<Card
  hoverable
  onClick={onCardClick ? onCardClick(data) : null}
  style={{height: 620, marginTop: '5%'}}
  cover={
    <center>
      <img alt={data.name} src={data.src} style={{width: '90%', height: 350, marginTop: '5%'}} />
    </center>
  }
>
  <Meta
    title={data.name}
    description={
      <div>
        <p></p>
        <p>{'วันที่เข้าฉาย   : ' + data.detail}</p>
        <p>{'ผู้กำกับ  :  ' + data.director}</p>
        <p>{'นักแสดง   :  ' + data.actor}</p>
        <p>{'ราคาต่อ 1 ใบ   : ' + data.price +'  บาท'}</p>
      </div>
    }
  />  
</Card>
)
export default CardDetail