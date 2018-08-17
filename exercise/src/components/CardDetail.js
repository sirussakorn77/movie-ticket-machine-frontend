import { Card,} from 'antd';

const { Meta } = Card;

const CardDetail =({data, onCardClick}) => (
<Card
  hoverable
  onClick={onCardClick ? onCardClick(data) : null}
  style={{ width: 240 }}
  cover={<img alt={data.name} src={data.src} />}
>
  <Meta
    title={data.name}
    // description={data.detail + }
  />  
  <p>{data.detail}</p>
  <p>{'price: ' + data.price}</p>
</Card>
)
export default CardDetail