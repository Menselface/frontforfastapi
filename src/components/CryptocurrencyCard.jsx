
import { Card, Col, Row } from 'antd';
function CryptocurrencyCard() {

    return (
      <>
       <Row className='flex'>
    <Col className='flex'>
      <Card title={
        <div>
            
        <img src = 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'/>
        <span className='flex'>Bitcoin</span>
        </div>
      }  bordered={false}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </Card>
    </Col>
  </Row>
      </>
    )
  }
  
  export default CryptocurrencyCard
  