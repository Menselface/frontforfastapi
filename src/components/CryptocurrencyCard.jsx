
import { Card, Col, Row } from 'antd';
function CryptocurrencyCard(props) {
    const {currency} = props

    return (
      <>
       <Row className='flex'>
    <Col className='flex'>
      <Card title={
        <div>
            
        <img src = {`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}/>
        <span className='flex'>{currency.name}</span>
        </div>
      }  bordered={false}>
        <b>Ціна: {currency.quote.USD.price} $</b> 
      </Card>
    </Col>
  </Row>
      </>
    )
  }
  
  export default CryptocurrencyCard
  