import './Cards.css';
import { Row, Col, Card} from 'antd';
import { CaretRightFilled } from '@ant-design/icons';
const Cards = () => {
    return(
        <>

      
      <h1 className='heading-edit1'>Explore Delhi</h1>
      <hr className='line-edit1'/>
      <div className='wrap-all'>
    <Row>


      <Col span={6}>
      <br/>
      <br/>

      <Card
    hoverable
    style={{ width: 250 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    className='card-edit' >
      <h1>Taj Mahal</h1>
  </Card>

  <br/>
  <br/>
      </Col>
      <Col span={6}>
      <br/>
      <br/>

      <Card
    hoverable
    style={{ width: 250 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    className='card-edit' >
      <h1>Taj Mahal</h1>
  </Card>

  <br/>
  <br/>
      </Col>
      <Col span={6}>
   
      <br/>
      <br/>
      <Card
    hoverable
    style={{ width: 250 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    className='card-edit'
  >
        <h1>Taj Mahal</h1>
  </Card>

  <br/>
  <br/>
      </Col>
      <Col span={6}>
   
      <h1 className='heading-edit2'>Explore More</h1>
      <hr className='line-edit3'/>
      <div className='circle'>

      <h1> <CaretRightFilled style={{ fontSize: '25px',color: 'white', marginTop:'32%' }}/></h1></div>

   </Col>
    </Row>
    </div>

    <h1 className='heading-edit1'>Best Of Himachal Pradesh</h1>
      <hr className='line-edit2'/>
      <div className='wrap-all'>
    <Row>


      <Col span={6}>
      <br/>
      <br/>

      <Card
    hoverable
    style={{ width: 250 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    className='card-edit' >
      <h1>Taj Mahal</h1>
  </Card>

  <br/>
  <br/>
      </Col>
      <Col span={6}>
      <br/>
      <br/>

      <Card
    hoverable
    style={{ width: 250 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    className='card-edit' >
      <h1>Taj Mahal</h1>
  </Card>

  <br/>
  <br/>
      </Col>
      <Col span={6}>
   
      <br/>
      <br/>
      <Card
    hoverable
    style={{ width: 250 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    className='card-edit'
  >
        <h1>Taj Mahal</h1>
  </Card>
  
  <br/>
  <br/>
      </Col>
      <Col span={6}>
      <h1 className='heading-edit2'>Explore More</h1>
      <hr className='line-edit3'/>
      <div className='circle'>

      <h1> <CaretRightFilled style={{ fontSize: '25px',color: 'white', marginTop:'32%' }}/></h1></div>

   </Col>
    </Row>
    </div>
        </>
    )
}

export default Cards;