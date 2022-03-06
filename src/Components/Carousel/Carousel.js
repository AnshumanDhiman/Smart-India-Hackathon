import './Carousel.css';
import { Carousel } from 'antd'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Carousell = () => {
    return(
        <>
        <div className='wrap-all'>
        <br/>
<Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
  <br/>
  <br/>
  </div>
        </>
    )
}

export default Carousell;