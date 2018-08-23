import { Card,} from 'antd';

const { Meta } = Card;

const CardDetail =({data, onCardClick}) => (
<Card
  hoverable
  onClick={onCardClick ? onCardClick(data) : null}
  style={{ width: 250 ,height: 600 }}
  cover={<img alt={data.name} src={data.src} width="242" height="363" />}
>
  <Meta
    title={data.name}
    // description={data.detail + }
  />  <p></p>
  <p>{'วันที่เข้าฉาย   : ' + data.detail}</p>
  <p>{'ผู้กำกับ  :  ' + data.director}</p>
  <p>{'นักแสดง   :  ' + data.actor}</p>
  <p>{'ราคาต่อ 1 ใบ   : ' + data.price +'  บาท'}</p>
</Card>
)
export default CardDetail