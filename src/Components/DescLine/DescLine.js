import './DescLine.css';
import back_img from '../../assets/images/desc.png';
import { Row, Col, Card } from 'antd';

const DescLine = () => {
    return(
    <>
    <img src={back_img} alt='' className='image_top_edit'/>
    <div className='wrap-all'>
    <Row>
      <Col span={6}>
       <br/> <br/> <br/> <br/> <br/> <br/> 
      <h1 className='heading-edit'>Most Popular <br/> Heritages</h1>
      <hr className='line-edit'/>
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
    </Row>
    </div>
    </>
    )
}

export default DescLine;